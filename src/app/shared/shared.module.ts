// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule // Importa RouterModule para las directivas de enrutamiento
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
