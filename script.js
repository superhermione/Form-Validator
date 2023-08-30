const form = document.getElementById('form');

const username = document.getElementById('username');

const email = document.getElementById('email');

const password = document.getElementById('password');

const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input){
    const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (validEmail.test(input.value.trim())){
        showSuccess
    }else{
        showError(input, `${getFieldName(input)} is not Valid`)
    }
}

//  Check required input
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} can not be empty`);
        }else{
            showSuccess(input)
        }
    });
    
}

// Check input length
function checkLength(input, min, max){
    if (input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters long`)
    }else if(input.value.length >max){
        showError(input, `${getFieldName(input)} must less than ${max} characters long`)
    }else{
        showSuccess(input);
    }

}

// Check password match
function checkPasswordMatch(input1, input2){
    if (input1.value != input2.value){
        showError(input2, 'Passwords do not match');
    }else{
        showSuccess
    }
}

// Get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}

// Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username, email, password, password2])
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2)

});


