import { callServer } from './api';

let statesInIndia = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry',
];
export { statesInIndia };

export function validateCareerForm(
    values,
    setIsPersonDataFilled,
    setIsLocationFilled,
    setIsResumeSelected,
) {
    const errors = {};

    if (!values) {
        return errors;
    }

    // Mandatory
    const requiredFields = [
        'name',
        'email',
        'phone',
        'state',
        'district',
        'coverLetter',
        'fileName',
    ];

    requiredFields.map((field) => {
        if (values[field] === '') {
            errors[field] = 'Required';
        }
    });

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // For Timeline
    const personalDataFields = ['name', 'email', 'phone'];
    const locationFields = ['state', 'district'];
    const resumeField = ['fileName', 'coverLetter'];

    let isPersonalDataHasErrors = false;
    let isLocationHasErrors = false;
    let isResumeHasErrors = false;

    personalDataFields.map((field) => {
        if (errors[field]) {
            isPersonalDataHasErrors = true;
        }
    });

    locationFields.map((field) => {
        if (errors[field]) {
            isLocationHasErrors = true;
        }
    });

    resumeField.map((field) => {
        if (errors[field]) {
            isResumeHasErrors = true;
        }
    });

    isPersonalDataHasErrors
        ? setIsPersonDataFilled(false)
        : setIsPersonDataFilled(true);
    isLocationHasErrors
        ? setIsLocationFilled(false)
        : setIsLocationFilled(true);
    isResumeHasErrors ? setIsResumeSelected(false) : setIsResumeSelected(true);

    return errors;
}

export function setJobRolesInSession(jobRoles) {
    sessionStorage.setItem('jobRoles', JSON.stringify(jobRoles));
}

export function getJobRolesFromSession() {
    return JSON.parse(sessionStorage.getItem('jobRoles'));
}

export async function submitJobApplicationForm(payload) {
    const data = await callServer('create_job_applicant', 'POST', payload);
    return data.message;
}

export async function submitContactForm(payload) {
    const data = await callServer('create_lead', 'POST', payload);
    return data.message;
}

export async function extractFileData(fileObject, callback) {
    let fileContent = '';

    const reader = new FileReader();
    reader.onloadend = () => {
        fileContent = reader.result;
        callback('fileData', fileContent);
    };
    reader.readAsDataURL(fileObject);
}

export function validateContactForm(values) {
    const errors = {};

    if (!values) {
        return errors;
    }

    // Mandatory
    const requiredFields = ['name', 'email', 'phone'];

    requiredFields.map((field) => {
        if (values[field] === '') {
            errors[field] = 'Required';
        }
    });

    return errors;
}
