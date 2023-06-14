import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GraphComponent } from './graph.component';
import { GraphRoutingModule } from './graph.routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, GraphRoutingModule],
  declarations: [GraphComponent],
})
export class GraphModule {}
