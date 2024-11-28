import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { TerminosComponent } from './components/terminos/terminos.component';
import { PoliticasComponent } from './components/politicas/politicas.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'terminos-y-condiciones',
    component: TerminosComponent
  },
  {
    path: 'politicas-de-privacidad',
    component: PoliticasComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];
