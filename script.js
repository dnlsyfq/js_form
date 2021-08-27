function validate(){
    if(document.myForm.firstName.value === ""){
        alert('Please insert name');
        document.myForm.firstName.focus() // highlight empty form
        return false;
    }

    if(document.myForm.phone.value === "" || isNaN(document.myForm.phone.value)){
        alert('Please insert phone number');
        document.myForm.phone.focus();
        return false;
    }

    if(document.myForm.country.value === "0"){
        alert('Please select country');
        return false;
    }
    return true;
}