import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgeComponentComponent } from './age-component/age-component.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DatetimeService } from './datetime.service';
import { ChildDetailsService } from './child-details.service';
import { ExampleDirective } from './example.directive';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { InputeditorComponent } from './inputeditor/inputeditor.component';
import { DataServiceService } from './data-service.service';
import { HttpsampleComponent } from './httpsample/httpsample.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AgeComponentComponent,
    ParentComponent,
    ChildComponent,
    ExampleDirective,
    TemplateFormsComponent,
    InputeditorComponent,
    HttpsampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [DatetimeService,ChildDetailsService,DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
