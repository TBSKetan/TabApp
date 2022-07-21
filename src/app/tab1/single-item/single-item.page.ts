import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.page.html',
  styleUrls: ['./single-item.page.scss'],
})
export class SingleItemPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // This method allowed only alphabets
  alphabetOnly(event): boolean {
    const pattern = /[A-Za-z\-\.]/;
    const result = pattern.test(event.key);
    return result;
 }

 numericOnly(event): boolean {
  const pattern = /^([0-9])$/;
  const result = pattern.test(event.key);
  return result;
}

}
