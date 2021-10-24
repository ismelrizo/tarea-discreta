import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LayoutComponent } from './layout/layout.component';
import { ZMComponent } from './z-m/z-m.component';

const routes: Routes = [
  { path: '',
  component: ZMComponent, },
  { path: 'z_m',
  component: ZMComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}