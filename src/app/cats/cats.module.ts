import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { RouterModule } from '@angular/router'; // Importa RouterModule si usas routerLink
import { CatsRoutingModule } from './cats-routing.module';
import { CatsListComponent } from './cats-list/cats-list.component';
import { CatFormComponent } from './cat-form/cat-form.component';

@NgModule({
  declarations: [
    CatsListComponent,
    CatFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule, 
    CatsRoutingModule
  ]
})
export class CatsModule {}
