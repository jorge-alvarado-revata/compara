import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { plan } from '../clases/plan';
import { guia } from '../clases/guia';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {

    planes: plan[];
    guias: guia[];
    navLinks: any[];
    activeLink = {};
    activeLinkIndex = -1;

    loading: boolean = false;
    errorMessage;

    visorForm = new FormGroup({
        selplanes: new FormControl('', Validators.required),
        selguias : new FormControl('', Validators.required),
    });

    constructor(private apiService: ApiService, private router: Router){

        this.navLinks = [
            {
                label: 'INTRODUCCIÓN',
                link: '/intro',
                index: 0
            }, {
                label: 'SELECCIÓN',
                link: '/sele',
                index: 1
            }, {
                label: 'GRAFICO',
                link: '/grafico',
                index: 2
            },
            {
                label: 'TABLAS',
                link: '/tablas',
                index: 3
            }

        ];
        this.activeLink = this.navLinks[0];
        this.getData('plan');
        this.getData('guia');
    }

    public getData(opcion: string){
        this.loading = true;
        this.errorMessage = "";

        this.apiService.sendGetRequest(opcion)
            .subscribe(
                (response) => {
                    console.log('responde received');
                    if (opcion  == 'plan')
                        this.planes = response;
                    else if (opcion == 'guia')
                        this.guias = response;
                },
                (error) => {
                    console.error('Request failed with error');
                    this.errorMessage = error;
                    this.loading = false;
                },
                () => {
                    console.error('Request completed');
                    this.loading = false;
                }
            )
    }

    ngOnInit(): void {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
        });
    }

}
