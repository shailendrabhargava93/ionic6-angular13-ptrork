import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { TransactionsComponent } from './transactions/transactions.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([]),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TransactionsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
