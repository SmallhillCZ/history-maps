import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { MapyCzComponent } from './components/mapycz-map/mapycz-map.component';
import { EventsTimelineComponent } from './components/events-timeline/events-timeline.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';

@NgModule({
  declarations: [
    MapComponent,
    MapyCzComponent,
    EventsTimelineComponent,
    InfoPanelComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule
  ]
})
export class MapModule { }
