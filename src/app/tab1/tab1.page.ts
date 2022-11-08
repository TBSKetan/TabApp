import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, OnDestroy{
  id = 1;
  constructor(private router: Router, public navCtrl: NavController) {}

  ngOnInit(): void {
    console.log('Tab1Page ngOnInit');
  }

  ionViewWillEnter(){
    console.log('Tab1Page ionViewWillEnter');
  }

  ionViewWillLeave(){
    console.log('Tab1Page ionViewWillLeave');
  }

  ionViewDidEnter(){
    console.log('Tab1Page ionViewDidEnter');
  }

  ionViewDidLeave(){
    console.log('Tab1Page ionViewDidLeave');
  }

  redirect() {
    // redirect one page to other page using button click one way
    //this.router.navigateByUrl('/tabs', {replaceUrl: true});

    // redirect one page to other page using button click second way
    const data = { name: 'Ketan', id: this.id };
    const navData: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(data),
      },
    };
    // this.router.navigate(['/', 'tabs', 'single-item', this.id], navData);

        // redirect one page to other page using navigation url and nav controller button click third way
    this.navCtrl.navigateForward('/tabs/single-item/' + this.id, navData);
  }

  ngOnDestroy(): void {
      console.log('Tab1Page ngOnDestroy');
  }
}
