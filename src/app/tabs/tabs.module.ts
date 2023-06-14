import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs-page';
import { TransactionsModule } from '../transactions/transactions.module';

@NgModule({
  imports: [CommonModule, IonicModule, TabsRoutingModule, TransactionsModule],
  declarations: [TabsPage],
})
export class TabsModule {}
