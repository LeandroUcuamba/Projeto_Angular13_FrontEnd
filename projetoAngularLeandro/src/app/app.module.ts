import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componenents/header/header.component';
import { FooterComponent } from './componenents/footer/footer.component';
import { AboutComponent } from './componenents/pages/about/about.component';
import { HomeComponent } from './componenents/pages/home/home.component';
import { NewMomentComponent } from './componenents/pages/new-moment/new-moment.component';
import { MomentFormComponent } from './componenents/moment-form/moment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    NewMomentComponent,
    MomentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
