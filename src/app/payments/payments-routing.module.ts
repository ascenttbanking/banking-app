import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './payments.component';
import { RegisterPaymentComponent } from './components/register-payment/register-payment.component';

const routes: Routes = [
  { path: '', component: PaymentsComponent },
  { path: 'register-payment', component: RegisterPaymentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
