import { Component, OnInit } from '@angular/core';
import { ApicomService } from '../apicom.service';
import { ApigraficoService } from '../apigrafico.service';
import { ApiService } from '../api.service';
import { resultado } from '../clases/resultado';
import { plan } from '../clases/plan';
import { guia } from '../clases/guia';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

    resultados: resultado[] = [];
    errorMessage;
    loading: boolean = false;
    isimageloading: boolean = false;
    imageToShow: any;
    dataGuia: guia[] = [];
    dataPlan: plan[] = [];

  constructor(
    private apicomService: ApicomService,
    private apigraficoService: ApigraficoService,
    private apiService: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const guia = this.route.snapshot.paramMap.get('guia');
    const plan = this.route.snapshot.paramMap.get('plan');
    this.getDataComp(guia, plan);
    this.getImageFromService(guia, plan);
    this.getData('guia', guia);
    this.getData('plan', plan);
  }

  public getData(entidad: string, id: string){
    this.errorMessage = "";
    this.apiService.sendGetRequestDetail(entidad, id)
        .subscribe(
            (response) => {
                console.log(response)
                console.log('responde received');
                if (entidad == "guia")
                    this.dataGuia = response;
                else if (entidad == "plan")
                    this.dataPlan = response;
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


  public getDataComp(guia: string, plan: string){
      this.errorMessage = "";
    this.apicomService.sendGetRequest(guia, plan)
        .subscribe(
            (response) => {
                console.log(response)
                console.log('responde received');
                this.resultados = response;
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

public createImage(response: any){
    return `data:image/jpg;base64,${response[0].image}`
}
public getImageFromService(guia: string, plan: string){
    this.isimageloading = true;

    this.apigraficoService.sendGetRequest(guia, plan)
        .subscribe(
            (response) => {
                this.imageToShow = this.createImage(response);
                this.isimageloading = false;

            },
            (error) => {
                console.error('Request failed with error');
                this.isimageloading = false;
                console.log(error);
            },
            () => {
                console.error('Request completed');
                this.isimageloading = false;
            }
        )
}

}
