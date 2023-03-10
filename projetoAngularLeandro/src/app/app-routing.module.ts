import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenents/pages/home/home.component';
import { AboutComponent } from './componenents/pages/about/about.component';
import { NewMomentComponent } from './componenents/pages/new-moment/new-moment.component';

const routes: Routes = [
   {path: '', component: HomeComponent },
   {path: 'about', component: AboutComponent },
   {path: 'moments/new', component: NewMomentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
