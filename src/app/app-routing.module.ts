import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'transactions' },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'analysis', component: GraphComponent },
  // { path: 'categories', component: ProductsComponent },
  // { path: 'search', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
