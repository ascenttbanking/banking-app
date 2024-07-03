import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentsModule } from './payments/payments.module';
import { PropertiesModule } from './properties/properties.module';
import { ReservationsModule } from './reservations/reservations.module';
import { SupportModule } from './support/support.module';
import { AccountModule } from './account/account.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,  // Relacionado a Cuentas
    PaymentsModule,  // Relacionado con Pagos
    PropertiesModule,  // Relacionado con Propiedades
    ReservationsModule,  // Relacionado con Reservas
    SupportModule // Relacionado con Mensajeria y Soporte
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
