import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DrawerModule } from 'primeng/drawer';
import { ToolbarModule } from 'primeng/toolbar';
import { TextareaModule } from 'primeng/textarea';

@NgModule({
  declarations: [],
  imports: [
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ToastModule,
    DrawerModule,
    ToolbarModule,
    TextareaModule
  ],
  exports: [
    CardModule,
    InputTextModule,
    PasswordModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ToastModule,
    DrawerModule,
    ToolbarModule
  ]
})
export class PrimengModule {}
