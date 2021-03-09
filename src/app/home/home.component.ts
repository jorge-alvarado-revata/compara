import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

import { plan } from '../clases/plan';
import { guia } from '../clases/guia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


    planes: plan[];
    guias: guia[];

    loading: boolean = false;
    errorMessage;

   
    selplanes= new FormControl('', Validators.required);
    selguias = new FormControl('', Validators.required);
 

    constructor(private apiService: ApiService){
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
}


