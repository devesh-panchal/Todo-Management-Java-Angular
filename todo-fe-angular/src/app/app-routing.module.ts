import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { TodosComponent } from './todos/todos.component';
import { ErrorComponent } from './error/error.component';
import { RouteGuardService } from './service/route-guard-service.service';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"welcome/:name",component:WelcomeComponent,canActivate:[RouteGuardService]},
  {path:"todos",component:TodosComponent,canActivate:[RouteGuardService]},
  {path:"todo/:id",component:TodoComponent,canActivate:[RouteGuardService]},
  {path:"logout",component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
