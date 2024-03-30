import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { PagesModule } from './pages/pages.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './shared/loader/loader.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    PagesModule,
    HttpClientModule,


    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
