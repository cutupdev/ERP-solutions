'use client';
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    Input,
    Textarea,
} from '@material-tailwind/react';
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import { submitContactForm, validateContactForm } from '@/functions/utils';
import { useCallback, useEffect, useState } from 'react';
import { Formik } from 'formik';

function ContactSalesContent() {
    const popUpMessagesText = {
        success: {
            heading: "✌️ We've Got Your Message",
            body: '😍 Thank you for your interest!. Our Sales Team will be in touch with you soon. Stay tuned!',
        },
        captchaFailed: {
            heading: '🙁 Submission Failed, It is the reCaptcha this time',
            body: 'Can you try submitting the form again ? Drop a mail to akshay[at]wahni[dot]com if you are still seeing this after 10 mins',
        },
        failed: {
            heading: '🙁 Uh Oh ! Something went wrong',
            body: "We're experiencing temporary technical difficulties. Can you try submitting your form again later ? Drop a mail to akshay[at]wahni[dot]com if you are still seeing this after 10 mins",
        },
    };

    const [activeTab, setActiveTab] = useState(1);
    const [openDialog, setOpenDialog] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState(popUpMessagesText.success);

    const handleOpen = () => setOpenDialog(!openDialog);

    const tabs = ['Head Office', 'Trivandrum Office', 'Calicut Office'];
    const addresses = [
        'Vikas Trust Rural Industrial Park,Sneehatheeram, Thalikulam P.O,Thrissur, Kerala 680569',
        'ICFOSS Swathanthra Incubator,Greenfield Stadium,Karyavattom, Thiruvananthapuram,Kerala 695581',
        'C/O Sidharth S & Associates 2nd Floor, KRS Complex,Cherootty Road, Kozhikode - 673032',
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const { executeRecaptcha } = useGoogleReCaptcha();

    const [token, setToken] = useState(null);

    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            return;
        }

        const token = await executeRecaptcha('page_view');
        setToken(token);
    }, [executeRecaptcha]);

    useEffect(() => {
        handleReCaptchaVerify();
    }, [handleReCaptchaVerify]);

    return (
        <div className=" md:flex items-center justify-center flex-col pt-10 md:pt-0">
            <div className="my-6 text-[#2e2e2e] text-center p-5">
                <h1 className="md:text-5xl text-4xl font-extrabold">
                    Get In Touch
                </h1>
                <p className="md:text-lg tracking-wider my-3 text-sm font-semibold">
                    Ready to transform your business? Click the link in bio to
                    connect with Wahni IT Solutions and start your digital
                    journey.
                </p>
            </div>

            <div className="md:h-[70%] md:w-[75%] rounded-3xl md:flex p-3 gap-4 border shadow-xl bg-white">
                <div className="md:w-[35%]  bg-gradient-to-b from-cyan-400 to-blue-400 rounded-2xl w-full md:p-5 md:pt-10 p-8 text-left text-[#fff]">
                    <h2 className="md:text-2xl text-4xl my-2 font-extrabold">
                        Contact Information
                    </h2>
                    <p className="md:text-lg text-lg my-5 font-semibold">
                        Wahni, Building the future, together.
                    </p>

                    <div className="flex items-center justify-start md:pt-10 px-3 gap-3">
                        <div>
                            <i className="ri-phone-fill md:text-2xl text-3xl text-[#fff]"></i>
                        </div>
                        <div className="text-md text-lg flex flex-col">
                            <a href="tel:919005768830">+91 9005 7688 30</a>
                        </div>
                    </div>

                    <div className="flex items-center justify-start  md:pb-5 gap-3 p-5">
                        <div>
                            <i className="ri-mail-fill md:text-2xl text-3xl text-[#fff]"></i>
                        </div>
                        <div className="text-white text-md text-lg">
                            <a href="mailto:alsaifsiddiqui1@gmail.com">alsaifsiddiqui1@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex gap-3 p-5">
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer ${activeTab === index + 1
                                    ? 'text-white font-extrabold transition duration-300 border-b-4 border-white'
                                    : 'font-extrabold  text-white transition duration-300'
                                    }`}
                                onClick={() => handleTabClick(index + 1)}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-start md:pt-1 md:pb-5 gap-3 p-5 md:p-0">
                        <div>
                            <i className="ri-map-pin-line md:text-2xl text-3xl text-[#fff]"></i>
                        </div>
                        <div className="text-white text-md text-lg">
                            {addresses[activeTab - 1]}
                        </div>
                    </div>
                </div>

                <div className="md:w-[60%] md:h-full w-full h-full pt-20 p-5 md:pt-0 md:p-0 md:py-0 py-10 rounded-2xl">
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            phone: '',
                            organization: '',
                            description: '',
                        }}
                        validate={(values) => validateContactForm(values)}
                        onSubmit={async (values, { setSubmitting }) => {
                            await handleReCaptchaVerify();
                            const payload = {
                                ...values,
                                message: values.description,
                                token: token,
                            };
                            const res = await submitContactForm(payload);

                            // Success
                            if (res.success) {
                                setPopUpMessage(popUpMessagesText.success);
                                handleOpen();
                                setSubmitting(false);
                                return;
                            }

                            // Captcha Fail
                            if (!res.success && res.isCaptchaFailed) {
                                setPopUpMessage(
                                    popUpMessagesText.captchaFailed,
                                );
                                handleOpen();
                                setSubmitting(false);
                                return;
                            }

                            // Fail
                            if (!res.success) {
                                setPopUpMessage(popUpMessagesText.failed);
                                handleOpen();
                                setSubmitting(false);
                                return;
                            }
                        }}
                    >
                        {({
                            errors,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            values,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="md:p-10 md:w-full md:h-full">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="w-full">
                                            <Input
                                                type="text"
                                                color="blue"
                                                label="Name"
                                                variant="standard"
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                error={!!errors.name}
                                            />
                                        </div>
                                        <div className="w-full">
                                            <Input
                                                type="text"
                                                color="blue"
                                                label="Organization"
                                                variant="standard"
                                                name="organization"
                                                value={values.organization}
                                                onChange={handleChange}
                                                error={!!errors.organization}
                                            />
                                        </div>
                                        <div className="w-full">
                                            <Input
                                                type="email"
                                                color="blue"
                                                label="Email"
                                                variant="standard"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                error={!!errors.email}
                                            />
                                        </div>
                                        <div className="w-full">
                                            <Input
                                                type="tel"
                                                color="blue"
                                                label="Phone"
                                                variant="standard"
                                                name="phone"
                                                value={values.phone}
                                                onChange={handleChange}
                                                error={!!errors.phone}
                                            />
                                        </div>
                                        <div className="col-span-2 md:w-full">
                                            <Textarea
                                                variant="standard"
                                                color="blue"
                                                label="Description"
                                                rows="4"
                                                name="description"
                                                value={values.description}
                                                onChange={handleChange}
                                                error={!!errors.description}
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-10">
                                        <Button
                                            variant="gradient"
                                            color="blue"
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            Send Message
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>

            <Dialog open={openDialog} handler={handleOpen}>
                <DialogHeader>{popUpMessage.heading}</DialogHeader>
                <DialogBody>
                    <span className="font-medium">{popUpMessage.body}</span>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="gradient"
                        color="blue"
                        onClick={handleOpen}
                    >
                        <span>Close</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
}

export default function ContactSales() {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey="6Ld-QI0iAAAAAPW9CwclXHZYoX0H0QQLhqTuc2iQ"
            scriptProps={{
                async: false,
                defer: false,
                appendTo: 'head',
                nonce: undefined,
            }}
        >
            <ContactSalesContent />
        </GoogleReCaptchaProvider>
    );
}
