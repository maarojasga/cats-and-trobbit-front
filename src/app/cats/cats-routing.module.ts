import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsListComponent } from './cats-list/cats-list.component';
import { CatFormComponent } from './cat-form/cat-form.component';

const routes: Routes = [
  { path: '', component: CatsListComponent }, 
  { path: 'new', component: CatFormComponent },
  { path: 'edit/:id', component: CatFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatsRoutingModule {}
