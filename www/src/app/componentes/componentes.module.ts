import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module Ngprime
import { MenubarModule } from 'primeng/menubar';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';

// Componente
import { MenubarComponent } from './menubar/menubar.component';
import { UploadArquivosComponent } from './upload-arquivos/upload-arquivos.component';
import { TableListComponent } from './table-list/table-list.component';



@NgModule({
  declarations: [
    MenubarComponent,
    UploadArquivosComponent,
    TableListComponent,
  ],
  imports: [
    CommonModule,
    MenubarModule,
    FileUploadModule,
    TableModule
  ],
  exports: [
    MenubarComponent,
    UploadArquivosComponent,
    TableListComponent,
  ]
})
export class ComponentesModule { }
