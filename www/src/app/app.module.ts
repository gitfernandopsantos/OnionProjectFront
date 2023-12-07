
// Componente
import { AppComponent } from './app.component';
import { ClienteComponent } from './pages/cadastros/cliente/cliente.component';
import { ProdutoComponent } from './pages/cadastros/produto/produto.component';
import { ControleVendasComponent } from './pages/consultas/controle-vendas/controle-vendas.component';

//Page
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// Module
import { ComponentesModule } from './componentes/componentes.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PanelModule } from 'primeng/panel';
import { MatGridListModule } from '@angular/material/grid-list';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ClienteComponent,
    ProdutoComponent,
    ControleVendasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    ComponentesModule,
    PanelModule,
    MatGridListModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
