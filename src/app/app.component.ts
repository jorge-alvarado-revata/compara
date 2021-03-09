import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppComponent,],
})
export class AppComponent {
  title = 'compara';
  navLinks: any[];
  activeLinkIndex = -1;
  activeLink = {};

  valueFromSele: number = 0;

  constructor(private router: Router){


    this.navLinks = [
        {
            label: 'INTRODUCCIÓN',
            link: '/intro',
            index: 0
        }, {
            label: 'SELECCIÓN',
            link: '/sele',
            index: 1
        }, 
    ];
        this.activeLink = this.navLinks[0];
  }

  parentEventHandlerFunction(valueEmitted){
      this.activeLink = this.navLinks[valueEmitted];
  }
  ngOnInit(): void {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
        });
    }

  selectTab(index: number) {
        this.activeLink = this.navLinks[index];
  }

}
