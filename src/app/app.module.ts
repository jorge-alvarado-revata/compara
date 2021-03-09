import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule }  from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { ApiService } from './api.service';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SafeHTMLPipe } from './safe-html.pipe';
// compoonentes de la applicacion
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { SeleComponent } from './sele/sele.component';
import { GraficoComponent } from './grafico/grafico.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent,
    IntroComponent,
    SeleComponent,
    GraficoComponent,
    SafeHTMLPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    FlexLayoutModule,
  ],
  exports: [
    MaterialModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
