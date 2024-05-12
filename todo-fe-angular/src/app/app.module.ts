import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { HttpIntercepterBasicAuthServiceService } from './service/http/http-intercepter-basic-auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    TodosComponent,
    LogoutComponent,
    ErrorComponent,
    MenuComponent,
    FooterComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpIntercepterBasicAuthServiceService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
