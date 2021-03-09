import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { plan } from '../clases/plan';
import { guia } from '../clases/guia';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-sele',
  templateUrl: './sele.component.html',
  styleUrls: ['./sele.component.css']
})
export class SeleComponent implements OnInit {

    planes: plan[];
    guias: guia[];
    guia: any;
    plan: any;

    loading: boolean = false;
    errorMessage;

    visorForm = new FormGroup({
        selplanes: new FormControl('', Validators.required),
        selguias : new FormControl('', Validators.required),
    });


    constructor(private apiService: ApiService,
                private route: ActivatedRoute,
                private router: Router){
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
                    if (opcion  == 'plan'){
                        this.planes = response;
                        console.log(response);
                    }
                    else if (opcion == 'guia'){
                        this.guias = response;
                        console.log(response);
                        }
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
    this.route.queryParams.subscribe(params => {
        this.guia = params['guia'];
        this.plan = params['plan'];
      });     
  }

  public grafica(){
        let guia = this.visorForm.get('selguias').value;
        let plan = this.visorForm.get('selplanes').value;
        var myurl = `/grafico/${guia}/${plan}`;
        this.router.navigateByUrl(myurl, /* Removed unsupported properties by Angular migration: relativeTo. */ {}).then(e => {
            if (e) {
                console.log("Navigation is successful!");
            } else {
                console.log("Navigation has failed!");
            }
          });
        
  }
}




