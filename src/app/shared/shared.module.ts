import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotificationComponent } from './components/notification/notification.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, NotificationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NotificationComponent
  ]
})
export class SharedModule { }
