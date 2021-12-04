/****
 * References
 * https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation
 * https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
 * https://regexr.com/ - Tool by Grant Skinner for testing Regular Expressions
 * 
 * Taken from Steve Griffith and modified
 * https://www.youtube.com/watch?v=D9JHizCAx8U 
 * An object-oriented approach
 */

 const APP = {
    init() {
      APP.addListeners();
    },
    addListeners() {
      let form = document.getElementById('form');
      let username = document.getElementById('usernameInput');
      let pass = document.getElementById('passwordInput');
      let email = document.getElementById('emailInput');
      let zip = document.getElementById('zipInput');
      let cell = document.getElementById('phoneNumberInput');
      //after changing the whole value
      username.addEventListener('change', APP.testName);
      email.addEventListener('change', APP.testEmail);
      zip.addEventListener('change', APP.testZip);
      pass.addEventListener('change', APP.checkPasswordRequirements);

      //while typing
      cell.addEventListener('input', APP.formatPhone);
  
      //when the form gets submitted
      form.addEventListener('submit', APP.validate);
    },
    validate(ev) {
      ev.preventDefault();
      let form = ev.target;
  
      let email = document.getElementById('email');
      console.log('willValidate', email.willValidate);
      //run validation on the whole form when submitting...
  
      // form controls have the following
      // invalid event
      console.log(email.validity);
      // validity readonly prop - a ValidityState object
      // ValidityState object props: (Boolean values)
      // badInput, customError, patternMismatch, rangeOverflow, rangeUnderflow
      // stepMismatch, tooLong, tooShort, typeMismatch, valid, valueMissing
      //
      // willValidate readonly prop - boolean
  
      // validationMessage - readonly prop from browser validation
      //                    or setCustomValidity( ) method
  
      // checkValidity() checks element, returns boolean,
      //                fires the invalid event
  
      // reportValidity() checks AND reports result
      //                  this shows the browser tooltip with warning
      //                  can be called at any point to show message
  
      // setCustomValidity(msg) if called with non-empty string it
      //                    will change the value of validity.valid
      //                    to false and validity.customError to true
    },
    testName(ev) {
      let username = ev.target;
      username.setCustomValidity(''); //clear old message
      //built-in test for error based on type, pattern, and other attrs
      let currently = username.checkValidity();
      let length = input.value.trim().length <= 8;

      if (currently) {
        if (length === false) {
          username.setCustomValidity('Username is too long.');
          username.reportValidity();
        }
      }
    },
    testEmail(ev) {
      let email = ev.target;
      email.setCustomValidity(''); //clear old message
      //built-in test for error based on type, pattern, and other attrs
      let currently = email.checkValidity();
      if (currently) {
        let emReg = new RegExp('^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$', 'i');
        if (emReg.test(email.value) === false) {
          email.setCustomValidity('NOT a valid email address.');
          email.reportValidity(); //show the custom message, trigger invalid event
        }
      }
    },
    testZip(ev) {
      let zipcode = ev.target;
      zipcode.setCustomValidity('');
      
      let currently = zip.checkValidity();
      if (currently) {
        let zipReg = new RegExp('^[0-9]{5}(?:-[0-9]{4})?$');
        if (zipReg.test(zipcode.value) === false) {
          zipcode.setCustomValidity('NOT a valid ZIP code.');
          zipcode.reportValidity();
        }
      }
    },
    formatPhone(ev) {
      let phone = ev.target;
      let cellReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

      if (cellReg.test(phone)) {
        phone.replace(phoneRegex, "($1) $2-$3");
    } else {
        phone.setCustomValidity('NOT a valid phone number.');
        phone.reportValidity();
    }
    },
    checkPasswordRequirements(input) {
      //check password requirements as user types
      // uppercase, lowercase, numeric, length >= 10
      // Allowed: [! @ # $ % ^ & * ( ) . , ? ; : ~]
      let response = {
        upper: false,
        lower: false,
        num: false,
        len: false,
        matches: null,
        invalid: true,
      };
      let txt = input.value.trim();
      response.upper = /[A-Z]/.test(txt);
      response.lower = /[a-z]/.test(txt);
      response.num = /[0-9]/.test(txt);
      response.len = input.value.trim().length <= 8;
      response.matches = txt.match(/([^A-Za-z0-9_!@#$%^&*().,?;:~])/);
      if (response.matches && response.matches.length > 0) {
        response.invalid = false;
      }
      return response;
    },
  };
  document.addEventListener('DOMContentLoaded', APP.init);