import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HeaderComponent } from './header/app.header.component';
import { FooterComponent } from './footer/app.footer.component';
import { NavigationComponent } from './navigation/app.nav.component';
import { LogoComponent } from './logo/app.logo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductlistComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
