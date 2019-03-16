import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import { setCurrentDirectiveDef } from '@angular/core/src/render3/state';

type SMap = any;
declare const SMap: SMap;

@Component({
  selector: 'mapycz-map',
  templateUrl: './mapycz-map.component.html',
  styleUrls: ['./mapycz-map.component.scss']
})
export class MapyCzComponent implements AfterViewInit {

  @ViewChild("map") mapEl: ElementRef<HTMLDivElement>;

  map:SMap;

  constructor(private mapService:MapService) {
    
  }

  ngAfterViewInit() {
    this.loadMap();
    this.mapService.center.subscribe(center => this.setCenter(center));
  }

  setCenter(center:[number,number]){
    this.map.setCenter(SMap.Coords.fromWGS84(center[0],center[1]));
  }

  loadMap(){
    
    var center = SMap.Coords.fromWGS84(14.41, 50.08);

    const m = this.map = new SMap(this.mapEl.nativeElement, center, 10);
    
    m.addDefaultLayer(SMap.DEF_BASE).enable();    
    m.addDefaultLayer(SMap.DEF_HISTORIC);
    m.addDefaultLayer(SMap.DEF_GEOGRAPHY);

    m.addControl(new SMap.Control.Scale(), { left: "10px", bottom: "10vh" });
    m.addControl(new SMap.Control.Copyright());
    m.addControl(new SMap.Control.Mouse(SMap.MOUSE_PAN | SMap.MOUSE_ZOOM | SMap.MOUSE_WHEEL));
    
    const l = new SMap.Control.Layer();
    l.addDefaultLayer(SMap.DEF_BASE);
    l.addDefaultLayer(SMap.DEF_HISTORIC);
    l.addDefaultLayer(SMap.DEF_GEOGRAPHY);
    m.addControl(l);

    return this.map;

  }

}
