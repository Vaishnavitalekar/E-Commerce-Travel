import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoremoduleRoutingModule } from './coremodule-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CoremoduleRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class CoremoduleModule { }
