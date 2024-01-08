import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import { DeleteDirective } from './directives/admin/delete.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, 
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    AdminModule,
    UiModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    {provide: "baseUrl", useValue: "https://localhost:7189/api", multi: true}
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
