import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { SeleComponent } from './sele/sele.component';
import { GraficoComponent } from './grafico/grafico.component';
import { TablasComponent } from './tablas/tablas.component';
import { DatatablaComponent } from './datatabla/datatabla.component';


const routes: Routes = [
    { path: '', redirectTo: 'intro', pathMatch: 'full'},
    { path: 'intro', component: IntroComponent},
    { path: 'sele', component: SeleComponent},
    { path: 'grafico/:guia/:plan', component: GraficoComponent},
    { path: 'datatabla/:guia/:plan', component: DatatablaComponent},
    { path: 'about', component: AboutComponent},
    { path: 'listado', component: TablasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

