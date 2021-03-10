import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { nodocurso } from '../clases/nodocurso';
import { nodomodcurso } from '../clases/nodomodcurso';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-datatabla',
  templateUrl: './datatabla.component.html',
  styleUrls: ['./datatabla.component.css']
})

export class DatatablaComponent implements OnInit {

    errorMessage;
    loading: boolean = false;
    dataCurso: nodocurso[] = [];
    dataModCurso: nodomodcurso[] = [];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const guia = this.route.snapshot.paramMap.get('guia');
    const plan = this.route.snapshot.paramMap.get('plan');
//    this.getDataMCS(guia, plan);
    this.getData('guia', guia);
    this.getData('plan', plan);
  }

  public getData(entidad: string, id: string){
    this.errorMessage = "";
    this.apiService.sendGetRequestQueryDetail(entidad, id)
        .subscribe(
            (response) => {
                console.log(response)
                console.log('responde received');
                if (entidad == "guia")
                    this.dataModCurso = response;
                else if (entidad == "plan")
                    this.dataCurso = response;
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

/*
  public getDataMCS(guia: string, plan: string){
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

*/
}
