import {AbstractControl,ValidationErrors,ValidatorFn} from '@angular/forms';

export class CustomValidators {
  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null=>{
      if (!control.value) {
        // if control is empty return no error
       return null
      }

      // test the value of the control against the regexp supplied
      let valid = regex.test(control.value);

      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }
}
