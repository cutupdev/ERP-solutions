'use client';
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    Input,
    Option,
    Select,
    Step,
    Stepper,
    Textarea,
    Typography,
} from '@material-tailwind/react';
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import {
    extractFileData,
    getJobRolesFromSession,
    statesInIndia,
    submitJobApplicationForm,
    validateCareerForm,
} from '@/functions/utils';
import { useCallback, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useSearchParams } from 'next/navigation';

function ApplyJobContent() {
    const popUpMessagesText = {
        success: {
            heading: "✌️ We've Got Your Application",
            body: '😍 Thank you for your interest!. Our HR Team will be in touch with you soon. Stay tuned!',
        },
        fileNotUploaded: {
            heading:
                "👍 We've Got Your Application, but the file failed to upload",
            body: 'You can try submitting again, or check your file. Note that only PDF file is supported.',
        },
        captchaFailed: {
            heading: '🙁 Submission Failed, It is the reCaptcha this time',
            body: 'Can you try submitting your application again ? Drop a mail to akshay[at]wahni[dot]com if you are still seeing this after 10 mins',
        },
        failed: {
            heading: '🙁 Uh Oh ! Something went wrong',
            body: "We're experiencing temporary technical difficulties. Can you try submitting your application again later ? Drop a mail to akshay[at]wahni[dot]com if you are still seeing this after 10 mins",
        },
    };

    const [activeStep, setActiveStep] = useState(1);
    const [isPersonDataFilled, setIsPersonDataFilled] = useState(false);
    const [isLocationFilled, setIsLocationFilled] = useState(false);
    const [isResumeSelected, setIsResumeSelected] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState(popUpMessagesText.success);

    const handleOpen = () => setOpenDialog(!openDialog);

    const searchParams = useSearchParams();
    const jobId = searchParams.get('jobId');
    const jobRoles = getJobRolesFromSession();
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

    useEffect(() => {
        if (isPersonDataFilled && isLocationFilled && isResumeSelected) {
            return setActiveStep(2);
        }
        if (isPersonDataFilled && isLocationFilled) {
            return setActiveStep(1);
        }
        if (isPersonDataFilled) {
            return setActiveStep(0);
        }
        return setActiveStep(-1);
    }, [isPersonDataFilled, isLocationFilled, isResumeSelected]);

    return (
        <>
            <div className="mx-4 md:mx-[15rem] py-8">
                <div className="bg-white/80 w-full h-full backdrop-blur border shadow-lg rounded-2xl">
                    <div className="col-span-11">
                        <div className="flex justify-between">
                            <div className="w-full px-6 py-2">
                                <Typography variant="h3">
                                    Job Application
                                </Typography>
                            </div>
                            <div className="hidden md:block w-1/2 px-4 py-2 flex justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-tr-2xl rounded-bl-2xl">
                                <Stepper
                                    disabled
                                    activeStep={activeStep}
                                    activeLineClassName="bg-white"
                                    lineClassName="bg-white/40 h-1"
                                >
                                    <Step
                                        activeClassName="ring-0 !bg-white text-white"
                                        completedClassName="!bg-white text-white"
                                        className="h-8 w-8"
                                    >
                                        <i className="ri-user-line text-blue-400"></i>
                                    </Step>
                                    <Step
                                        activeClassName="ring-0 !bg-white text-white"
                                        completedClassName="!bg-white text-white"
                                        className="h-8 w-8"
                                    >
                                        <i className="ri-map-pin-2-line text-blue-400"></i>
                                    </Step>
                                    <Step
                                        activeClassName="ring-0 !bg-white text-white"
                                        completedClassName="!bg-white text-white"
                                        className="h-8 w-8"
                                    >
                                        <i className="ri-file-upload-line text-blue-400"></i>
                                    </Step>
                                </Stepper>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-2 my-10">
                        <Formik
                            initialValues={{
                                name: '',
                                jobRole: jobId,
                                email: '',
                                phone: '',
                                state: '',
                                district: '',
                                coverLetter: '',
                                resumeFile: '',
                                fileName: '',
                                fileData: '',
                            }}
                            validate={(values) =>
                                validateCareerForm(
                                    values,
                                    setIsPersonDataFilled,
                                    setIsLocationFilled,
                                    setIsResumeSelected,
                                )
                            }
                            onSubmit={async (values, { setSubmitting }) => {
                                await handleReCaptchaVerify();
                                const payload = {
                                    applicant_name: values.name,
                                    email_id: values.email,
                                    phone_number: values.phone,
                                    job_title: values.jobRole,
                                    cover_letter: values.coverLetter,
                                    state: values.state,
                                    district: values.district,
                                    filename: values.fileName,
                                    content: values.fileData,
                                    token: token,
                                };
                                const res =
                                    await submitJobApplicationForm(payload);

                                // Success
                                if (
                                    res.success &&
                                    res.isContentUpdated &&
                                    res.isResumeUploaded
                                ) {
                                    setPopUpMessage(popUpMessagesText.success);
                                    handleOpen();
                                    setSubmitting(false);
                                    return;
                                }

                                // Captcha failed
                                if (
                                    !res.success &&
                                    res.error &&
                                    res.error.includes('captcha failed')
                                ) {
                                    setPopUpMessage(
                                        popUpMessagesText.captchaFailed,
                                    );
                                    handleOpen();
                                    setSubmitting(false);
                                    return;
                                }

                                // Resume upload failed
                                if (res.success && !res.isResumeUploaded) {
                                    setPopUpMessage(
                                        popUpMessagesText.fileNotUploaded,
                                    );
                                    handleOpen();
                                    setSubmitting(false);
                                    return;
                                }

                                // Doc Save Failed
                                if (res.success && !res.isDocSaved) {
                                    setPopUpMessage(popUpMessagesText.failed);
                                    handleOpen();
                                    setSubmitting(false);
                                    return;
                                }

                                // Failed
                                if (!res.success) {
                                    setPopUpMessage(popUpMessagesText.failed);
                                    handleOpen();
                                    setSubmitting(false);
                                    return;
                                }

                                setSubmitting(false);
                            }}
                            onReset={() => {
                                setActiveStep(-1);
                            }}
                        >
                            {({
                                values,
                                errors,
                                handleChange,
                                handleSubmit,
                                handleReset,
                                isSubmitting,
                                setFieldValue,
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-2 gap-6">
                                        <Input
                                            variant="standard"
                                            label="Name"
                                            placeholder="John"
                                            color="blue"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            error={!!errors.name}
                                        />
                                        <Select
                                            label="Job Role"
                                            variant="standard"
                                            name="jobRole"
                                            onChange={(val) =>
                                                setFieldValue('jobRole', val)
                                            }
                                            value={values.jobRole}
                                            error={!!errors.jobRole}
                                        >
                                            {jobRoles
                                                ? jobRoles.map((job) => (
                                                      <Option
                                                          key={job}
                                                          value={job}
                                                      >
                                                          {job}
                                                      </Option>
                                                  ))
                                                : null}
                                        </Select>
                                        <Input
                                            type="email"
                                            variant="standard"
                                            label="E-Mail"
                                            placeholder="hello@john.com"
                                            color="blue"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            error={!!errors.email}
                                        />
                                        <Input
                                            variant="standard"
                                            label="Phone Number"
                                            placeholder="+91xxxxxxxxxx"
                                            color="blue"
                                            name="phone"
                                            type="tel"
                                            onChange={handleChange}
                                            value={values.phone}
                                            error={!!errors.phone}
                                        />
                                    </div>
                                    <div className="mt-14 grid grid-cols-2 gap-6">
                                        <Select
                                            label="State"
                                            variant="standard"
                                            name="state"
                                            onChange={(val) =>
                                                setFieldValue('state', val)
                                            }
                                            value={values.state}
                                            error={!!errors.state}
                                        >
                                            {statesInIndia.map((state) => (
                                                <Option
                                                    key={state}
                                                    value={state}
                                                >
                                                    {state}
                                                </Option>
                                            ))}
                                        </Select>
                                        <Input
                                            variant="standard"
                                            label="District"
                                            placeholder="Kochi"
                                            color="blue"
                                            name="district"
                                            onChange={handleChange}
                                            value={values.district}
                                            error={!!errors.district}
                                        />
                                    </div>
                                    <div className="mt-8 grid gap-6">
                                        <Textarea
                                            variant="standard"
                                            label="Cover Letter"
                                            color="blue"
                                            name="coverLetter"
                                            onChange={handleChange}
                                            value={values.coverLetter}
                                            error={!!errors.coverLetter}
                                        />
                                    </div>
                                    <div className="mt-4 grid grid-cols-2 gap-6">
                                        <div className="grid gap-6">
                                            <div className="mt-3">
                                                <label
                                                    className="block mb-2 text-sm font-medium text-blue-400 dark:text-white"
                                                    htmlFor="file_input"
                                                >
                                                    Upload file
                                                </label>
                                                <input
                                                    className="block py-1 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
                                                    aria-describedby="file_input_help"
                                                    id="file_input"
                                                    type="file"
                                                    name="resumeFile"
                                                    onChange={async (e) => {
                                                        setFieldValue(
                                                            'fileName',
                                                            e.target.files[0]
                                                                .name,
                                                        );
                                                        extractFileData(
                                                            e.target.files[0],
                                                            setFieldValue,
                                                        );
                                                    }}
                                                />
                                                <p
                                                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                                    id="file_input_help"
                                                >
                                                    Only PDF file is supported.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-end">
                                        <div className="flex justify-between gap-x-4">
                                            <Button
                                                variant="outlined"
                                                onClick={handleReset}
                                            >
                                                Clear
                                            </Button>
                                            <Button
                                                color="blue"
                                                type="submit"
                                                disabled={isSubmitting}
                                            >
                                                Apply Now
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                    <div className="col-span-1 h-100 bg-blue-400 rounded-b-2xl py-2"></div>
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
        </>
    );
}

export default function ApplyJob() {
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
            <ApplyJobContent />
        </GoogleReCaptchaProvider>
    );
}
