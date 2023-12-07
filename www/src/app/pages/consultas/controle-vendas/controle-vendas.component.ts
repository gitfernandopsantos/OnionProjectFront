import { Component } from '@angular/core';

@Component({
  selector: 'app-controle-vendas',
  templateUrl: './controle-vendas.component.html',
  styleUrls: ['./controle-vendas.component.css']
})
export class ControleVendasComponent {

  graficoVendasRegiao: any;
  graficoVendasProduto: any;

  optionsGraficoVendasProduto: any;
  optionsGraficoVendasRegiao: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.graficoVendasRegiao = {
      labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
      datasets: [
        {
          data: [540, 325, 702, 200, 400],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--purple-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--purple-400')]

        }
      ]
    };

    this.graficoVendasProduto = {
      labels: ['Celulares', 'Notebooks', 'Televisores'],
      datasets: [
        {
          data: [800, 500, 400],
          backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--blue-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--blue-400')]
        }
      ]
    };

    this.optionsGraficoVendasRegiao = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };

    this.optionsGraficoVendasProduto = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }
}
