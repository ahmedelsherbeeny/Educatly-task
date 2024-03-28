import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../pages/pages.module').then((mod) => mod.PagesModule),
  },
];

@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [LayoutComponent, RouterModule],
})
export class LayoutsModule {}
