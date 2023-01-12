let nameValue;
let emailValue;
let feedbackValue;
let urlString;

const querySelectorMethod = function(className){
   return document.querySelector(className).value;
}

  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

const buttonhandler = function () {
   nameValue = querySelectorMethod('.nameClass');
   emailValue = querySelectorMethod('.emailClass');
   feedbackValue = querySelectorMethod('.feedbackClass');
   console.log(nameValue, emailValue, feedbackValue);
   let str = 'http://sfdcustomerfeedbackapi.us-e2.cloudhub.io/createrecord?name='+nameValue+'&email='+emailValue+'&description='+feedbackValue;
   urlString = str;
   window.location.href = urlString;

   
};


