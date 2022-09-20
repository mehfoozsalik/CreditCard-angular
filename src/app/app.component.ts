import { Component } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  holderNumber?: string;
  isHN?: boolean;
  holderName?: string;
  isHNo?: boolean;
  month?: number;
  ismm?: boolean;
  year?: number;
  isyy?: boolean;
  cvc?: number;
  iscvc?: boolean;
  SubmitForm: boolean = false;

  emptyMessage: string = 'This field can not be blank';

  isNotFilled?: boolean;

  notFilledMessage: string = 'Card number can not be less then 16 digits';
  constructor() {}

  checkNumeric(e: any) {
    // Accept only alpha numerics, not special characters
    var regex = new RegExp('^[0-9]+$');
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
      return true;
    }
    e.preventDefault();
    return false;
  }
  checkAlphabets(e: any) {
    // Accept only alpha numerics, not special characters
    var regex = new RegExp('^[a-z A-Z]+$');
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
      return true;
    }
    e.preventDefault();
    return false;
  }

  format(s: string) {
    return s.toString().replace(/\d{4}(?=.)/g, '$& ');
  }
  onPaste(e: any) {
    e.preventDefault();
    return false;
  }
  onChange(event: any) {
    var numb = event?.target.value;
    if (numb?.length >= 16) {
      this.holderNumber = this.format(numb);
      this.isNotFilled = false;
    } else {
      this.isNotFilled = true;
    }
  }
  onRemove() {
    this.holderNumber = undefined;
  }
  onSubmit() {
    if (this.holderName === undefined || this.holderName == '') {
      this.isHN = true;
    } else {
      this.isHN = false;
    }
    if (this.month === null || this.month === undefined) {
      this.ismm = true;
    } else {
      this.ismm = false;
    }
    if (this.year === null || this.year === undefined) {
      this.isyy = true;
    } else {
      this.isyy = false;
    }
    if (this.cvc === null || this.cvc === undefined) {
      this.iscvc = true;
    } else {
      this.iscvc = false;
    }
    if (this.holderNumber === undefined || this.holderNumber === '') {
      this.isHNo = true;
    } else {
      this.isHNo = false;
    }

    console.log(
      Boolean(
        this.isHN &&
          this.ismm &&
          this.isyy &&
          this.isyy &&
          this.iscvc &&
          this.isHNo
      )
    );

    if (
      !this.isHN &&
      !this.ismm &&
      !this.isyy &&
      !this.isyy &&
      !this.iscvc &&
      !this.isHNo &&
      !this.isNotFilled
    ) {
      this.SubmitForm = true;
    }
  }
  onContinue() {
    this.SubmitForm = false;
  }
}
