import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [ 
  { path: 'cats', loadChildren: () => import('./cats/cats.module').then(m => m.CatsModule) },
  { path: 'images', loadChildren: () => import('./images/images.module').then(m => m.ImagesModule) },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
