import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//* Modules
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './pages/main.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

@NgModule({
  declarations: [
    AppComponent,
    NotpagefoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
