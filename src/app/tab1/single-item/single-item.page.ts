import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.page.html',
  styleUrls: ['./single-item.page.scss'],
})
export class SingleItemPage implements OnInit, OnDestroy {
  id: any;

  constructor(private route: ActivatedRoute, public navCtrl: NavController) {}

  ngOnInit() {
    console.log('Single Page ngOnInit');
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

  ionViewWillEnter() {
    console.log('Single Page ionViewWillEnter');
  }

  ionViewWillLeave() {
    console.log('Single Page ionViewWillLeave');
  }

  ionViewDidEnter() {
    console.log('Single Page ionViewDidEnter');
  }

  ionViewDidLeave() {
    console.log('Single Page ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('Single Page ngOnDestroy');
  }
}
