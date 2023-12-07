import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ClienteComponent } from './pages/cadastros/cliente/cliente.component';
import { ProdutoComponent } from './pages/cadastros/produto/produto.component';
import { ControleVendasComponent } from './pages/consultas/controle-vendas/controle-vendas.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'cadastro-cliente', component: ClienteComponent },
  { path: 'cadastro-produto', component: ProdutoComponent },
  { path: 'controle-vendas', component: ControleVendasComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
