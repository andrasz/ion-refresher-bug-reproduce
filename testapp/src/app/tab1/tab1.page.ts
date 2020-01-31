import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  dis = false;

  ionViewDidEnter() {
    const el = document.getElementsByClassName('list')['0'];
    if (el) {
      el.addEventListener('scroll', e => {
        this.dis = true;
        if (e.target.scrollTop === 0) { // enable ion-refresher only when the list is scrolled to the top
          this.dis = false;
        }
      });
    }
  }

  refreshAppointments(event) {
    setTimeout(() => {
      event.target.complete();
    }, 3000);
  }

}
