import { Component } from '@angular/core';
import { ListSalesService } from '../../../services/list-sales.service';
import { Vendas } from 'src/models/vendas';

@Component({
  selector: 'app-list-sales',
  templateUrl: '../table-list/table-list.component.html',
  styleUrls: ['../table-list/table-list.component.css']
})
export class TableListComponent {
  ListaVendas!: Vendas[];
  constructor(private ListSalesService: ListSalesService) {

  }

  ngOnInit() {
    this.ListSalesService.getProductsMini().then((data) => {

      this.ListaVendas = data;
    });
  }
}
