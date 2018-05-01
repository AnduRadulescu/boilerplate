import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    PagesModule,
    BrowserModule,
    ClarityModule,
    PagesRoutingModule,
    HttpClientModule
  ],
  // providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
