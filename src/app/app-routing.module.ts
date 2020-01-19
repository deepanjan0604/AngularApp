import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import{ AboutComponent} from './about/about.component';
import { IndexComponent } from './index/index.component';
import { HelpComponent } from './help/help.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/index'},
  {path:'about',component:AboutComponent},
  {path:'index',component:IndexComponent},
  {path:'index/:name',component:IndexComponent},
  {path:'help',component:HelpComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
