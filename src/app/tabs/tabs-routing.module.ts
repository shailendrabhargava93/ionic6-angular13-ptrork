import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { TransactionsComponent } from '../transactions/transactions.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'transactions',
        children: [
          {
            path: '',
            component: TransactionsComponent,
          },
          // {
          //   path: 'session/:sessionId',
          //   loadChildren: () =>
          //     import('../session-detail/session-detail.module').then(
          //       (m) => m.SessionDetailModule
          //     ),
          // },
        ],
      },
      {
        path: 'graph',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../graph/graph.module').then((m) => m.GraphModule),
          },
          // {
          //   path: 'session/:sessionId',
          //   loadChildren: () =>
          //     import('../session-detail/session-detail.module').then(
          //       (m) => m.SessionDetailModule
          //     ),
          // },
          // {
          //   path: 'speaker-details/:speakerId',
          //   loadChildren: () =>
          //     import('../speaker-detail/speaker-detail.module').then(
          //       (m) => m.SpeakerDetailModule
          //     ),
          // },
        ],
      },
      // {
      //   path: 'map',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../map/map.module').then((m) => m.MapModule),
      //     },
      //   ],
      // },
      // {
      //   path: 'about',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../about/about.module').then((m) => m.AboutModule),
      //     },
      //   ],
      // },
      {
        path: '',
        redirectTo: '/app/tabs/transactions',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
