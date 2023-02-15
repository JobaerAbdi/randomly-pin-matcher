function getFourDigitPin(){
    const pin = pinNumber();
    const getPin = pin + '';
    if(getPin.length === 4){
        return pin;
    }
    else{
        return getFourDigitPin();
    }
}

function pinNumber(){
    const randomNumber = Math.round(Math.random()*10000);
    return randomNumber;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const getFourDigitPinNumber = getFourDigitPin();
    const generalInputField = document.getElementById('general-input-field');
    generalInputField.value = getFourDigitPinNumber;
})

document.getElementById('calculator-body-delegate').addEventListener('click',function(event){
    const singleDigit = event.target.innerText;
    const calculatorInputFiled = document.getElementById('calculator-input-filed');
    const prevInputNumber = calculatorInputFiled.value;
    if(isNaN(singleDigit)){
        if(singleDigit === 'C'){
            calculatorInputFiled.value = '';
        }
        else if(singleDigit === '<'){
            const digits = prevInputNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            calculatorInputFiled.value = remainingDigits;
        }
    }
    else{
        const newInputNumber = prevInputNumber + singleDigit;
        calculatorInputFiled.value = newInputNumber;
    }
})

document.getElementById('btn-submit').addEventListener('click',function(){
    const generalInputField = document.getElementById('general-input-field');
    const generalInputFieldNumber = generalInputField.value;

    const calculatorInputFiled = document.getElementById('calculator-input-filed');
    const calculatorInputFiledNumber = calculatorInputFiled.value;

    const messagesSuccess = document.getElementById('messages-success');
    const messagesFauler = document.getElementById('messages-fauler');

    if(generalInputFieldNumber === calculatorInputFiledNumber){
        messagesSuccess.style.display = 'block';
        messagesFauler.style.display = 'none';
    }
    else{
        messagesFauler.style.display = 'block';
        messagesSuccess.style.display = 'none';
    }
})

