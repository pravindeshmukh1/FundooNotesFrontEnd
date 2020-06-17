import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static emailDomin(domainName: string) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const email: string = control.value;
      const domain = email.substring(email.lastIndexOf('@') + 1);
      if (email === '' || domain.toLowerCase() === domainName.toLowerCase()) {
        return null;
      } else {
        return { emailDomin: true };
      }
    };
  }
}
