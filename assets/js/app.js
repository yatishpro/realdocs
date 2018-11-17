
//Utility Functions

function show(element){
  element.style.display = '';
}

function hide(element){
  element.style.display = 'none';
}

function validateDisplayResult(element, message)  {
  var elementvalue = element;
  element.innerHTML = message;
  setTimeout(removeText, 2000);

  function removeText(elementvalue) {
    element.innerHTML = '';
  }
}

function userMobileValidation(element, validater){
  var validationNum = validater;
  if(element.value === ''){
      validateDisplayResult(validater, 'Number Field Required');
    return true;
  } else {
    const result = element.value.length < 10 || element.value.length >10;
    if(result){
      validateDisplayResult(validater, 'Invalid Number');
      return true;
    }
    const re = /^[1-9]\d*$/;

    const resultNum = re.test(element.value);
    if(!resultNum){
      validateDisplayResult(validater, 'Invalid Number');
      return true;
    }
  }
}

function validateEmailDefault(element, validater) {
 if(element.value === ''){
  validateDisplayResult(validater, 'Email Field Required');
  return true;
 } else {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const result =  re.test(element.value);
  if(!result) {
    validateDisplayResult(validater, 'Invalid Email Format');
    return true;
  } else {
    return false;
  }

 }
}

//Variables
const userName = document.querySelector('#uName');
const userPhone = document.querySelector('#uPhone');
const userEmail = document.querySelector('#uEmail');

const getFirstStepResult = document.querySelector('#firstStepResult');

//First Step Know About Property
const propertyName = document.querySelector('#pName');
const propertyOwner = document.querySelector('#pOwner');
const propertyAddress = document.querySelector('#pAddress');

const getSecondStepRestult = document.querySelector('#secondStepResult');

//Final Step Result
const getTypeOfProperty = document.querySelector('#typeOfProperty');
const getPropertyStatus = document.querySelector('#propertyStatus');
const getNumberOfFloors = document.querySelector('#numberOfFloors');

const getThirdStepResult = document.querySelector('#thirdStepResult');

//Final Message
const finalMessage = document.querySelector('#fourthStepDisplay');
//Buttons
const enterStepBtn = document.querySelector('#enter-step');
const firstStepBtn = document.querySelector('#first-step');
const secondStepBtn = document.querySelector('#second-step');
const thirdStepBtn = document.querySelector('#third-step');
const dontKnowType = document.querySelector('#pDetailsDontKnow');


//Modules
const enterStepDisplay = document.querySelector('#enterStepDisplay');
const firstStepDisplay = document.querySelector('#firstStepDisplay');
const secondStepDispaly = document.querySelector('#secondStepDisplay');
const thirdStepDisplay = document.querySelector('#thirdStepDisplay');
const modalRef = document.querySelector('#myModal');
//Modal
document.addEventListener('click', unkonwRef);
function unkonwRef(e){
  if(e.target.parentNode.id === 'myMapModal') {
    modalRef.style.display = 'block';
  } else if(e.target.id === 'modalClose'){
    modalRef.style.display = 'none';
  }
}






//Evetn Listeners
enterStepBtn.addEventListener('click', goToFirstStep);
firstStepBtn.addEventListener('click', goToSecondStep);
secondStepBtn.addEventListener('click', goToThirdStep);
//dontKnowType.addEventListener('click', dontKnowTypeFun);
thirdStepBtn.addEventListener('click', finalSubmit);

var letsBeginTime;
function goToFirstStep(){
  letsBeginTime = new Date();
  hide(enterStepDisplay);
  show(firstStepDisplay);
}



var dontKnowTime;
function goToSecondStep(){
if(userName.value === ''){
  validateDisplayResult(getFirstStepResult, 'User Name Required');
} else if(userMobileValidation(userPhone, getFirstStepResult)) {
  
  } else if(validateEmailDefault(userEmail, getFirstStepResult)) {

  } else {

    dontKnowTime = new Date();
  const totalDontKonwTime = dontKnowTime.getTime() - letsBeginTime.getTime();
  const calculatedDate = new Date(totalDontKonwTime);

  const toStrMin = (totalDontKonwTime/1000/60).toString();

  const data = {
    userName: userName.value,
    userEmail: userEmail.value,
    userPhone: userPhone.value,
    'dkMinutes': toStrMin.split('.')[0],
    'seconds' : calculatedDate.getSeconds()
  }
    
    console.log(data);
    hide(firstStepDisplay);
    show(secondStepDisplay);
  }

 


}

function goToThirdStep() {


  if(propertyName.value === ''){
    validateDisplayResult(getSecondStepRestult, 'Property Name Required');
  } else if(propertyOwner.value === '') {
    validateDisplayResult(getSecondStepRestult, 'Property Owner Name Required');
  } else if(propertyAddress.value === '') {
    validateDisplayResult(getSecondStepRestult, 'Property Address Required');
  } else {
    hide(secondStepDispaly);
    show(thirdStepDisplay);
  }

}

var finalSubmitTime;
function finalSubmit() {
  if(getTypeOfProperty.value === '-Select-') {
    validateDisplayResult(getThirdStepResult, 'Property Type Required');
  } else if(getPropertyStatus.value === '-Select-') {
    validateDisplayResult(getThirdStepResult, 'Property Status Required');
  } else if(getNumberOfFloors.value === '-Select-') {
    validateDisplayResult(getThirdStepResult, 'Property Floor Required');
  } else {
    finalSubmitTime = new Date;

    const TotalTimeTaken = finalSubmitTime.getTime() - letsBeginTime.getTime();
    const calculatedTotalDate = new Date(TotalTimeTaken);

    const totalToStrMin = (TotalTimeTaken/1000/60).toString();

    hide(thirdStepDisplay);
    show(finalMessage);

    const data = {
      userName: userName.value,
      userEmail: userEmail.value,
      userPhone: userPhone.value,
      propertyName: propertyName.value,
      propertyOwner: propertyOwner.value,
      propertyAddress: propertyAddress.value,
      'propertyType': getTypeOfProperty.value,
      'propertyStatus': getPropertyStatus.value,
      'propertyFloors': getNumberOfFloors.value,
      'totalMinutes': totalToStrMin.split('.')[0],
      'totalSeconds': calculatedTotalDate.getSeconds()
    }
    console.log(data);
  }
}


// function dontKnowTypeFun() {
//   dontKnowTime = new Date();
//   const totalDontKonwTime = dontKnowTime.getTime() - letsBeginTime.getTime();
//   const calculatedDate = new Date(totalDontKonwTime);

//   const toStrMin = (totalDontKonwTime/1000/60).toString();

//   const data = {
//     userName: userName.value,
//     userEmail: userEmail.value,
//     userPhone: userPhone.value,
//     'dkMinutes': toStrMin.split('.')[0],
//     'seconds' : calculatedDate.getSeconds()
//   }
//   console.log(data);
//   getSecondStepRestult.innerHTML = `Call Us: +91-80-4201-9211 or<br>
//   Email US: web.inquiry@realdocs.in`;
// }

