import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgeComponentComponent } from './age-component/age-component.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DatetimeService } from './datetime.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AgeComponentComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DatetimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
