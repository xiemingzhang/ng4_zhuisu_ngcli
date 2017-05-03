import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [ // Routes类型的数组
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/home' }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });