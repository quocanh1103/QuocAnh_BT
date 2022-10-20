import { checkNotEmpty } from './validate.js'

var addEventClick = function(idElement, sms) {
   document.querySelector('#'+idElement).addEventListener('click', function() {
       if (checkNotEmpty(sms)) {
           alert('Noi dung sms la ' + sms);
       }
   }) 
}

export var addEventBlur = function(idElement) {
    document.querySelector('#'+idElement).addEventListener('blur', function() {
            alert('Noi dung sms la blur');
    }) 
 }

 export default addEventClick;