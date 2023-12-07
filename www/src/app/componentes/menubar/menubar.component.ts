import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menubar',
  templateUrl: '../menubar/menubar.component.html',
  styleUrls: ['../menubar/menubar.component.css']
})
export class MenubarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: '/inicio',
      },
      {
        label: 'Cadastro',
        icon: 'fas fa-clipboard-list',
        items: [
          {
            label: 'Cliente',
            icon: 'fa-solid fa-address-card',
            routerLink: '/cadastro-cliente',
          },
          {
            label: 'Produto',
            icon: 'fa-duotone fa-flask',
            routerLink: '/cadastro-produto',
          }
        ]
      },
      {
        label: 'Consultas',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Controle de Vendas',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: '/controle-vendas',
          }
        ]
      },
    ];
  }
}
