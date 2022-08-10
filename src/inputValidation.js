// ================== //
// inputValidation.js //
// ================== //

function isFormValid(inputValues)
{
    if (inputValues == null) { return false; }
}

function doesAppNameValid(appName)
{
    if (appName == null) { return false; }

    let isValid = (new RegExp('/\w{4,30}/')).test(); // Word between 4-30 characters.
    
    console.log('doesAppNameValid: ' + isValid);
    return isValid;
}

function doesPriceValueValid(price)
{
    if (price == null) { return false; }

    let isValid = (new RegExp('/\d+/')).test(); // At least one digit.

    console.log('doesPriceValueValid: ' + isValid);
    return isValid;
}

function isDescriptionValid(description)
{
    const BUTTOM = 0;
    const TOP    = 500;

    if (description == null) { return false; }

    let strLen = description.toString().length;
    let isValid = BUTTOM <= strLen && strLen <= TOP;

    console.log('isDescriptionValid: ' + isValid);
    return isValid;
}

function doesCompanyNameValid(companyName)
{
    const BUTTOM = 0;
    const TOP    = 30;

    if (companyName == null) { return false; }

    let strLen = description.toString().length;
    let isValid = BUTTOM <= strLen && strLen <= TOP;

    console.log('doesCompanyNameValid: ' + isValid);
    return isValid;
}

function doesImgPathValid(imgPath)
{
    if (imgPath == null) { return false; }

    let isValid = false;

    console.log('doesImgPathValid: ' + isValid);
    return false;
}