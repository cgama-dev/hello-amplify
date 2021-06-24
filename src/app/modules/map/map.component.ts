import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeoJsonObject } from 'geojson';
import { geoJSON, Map } from 'leaflet';
import { ApiService } from '../../services/api.service';

import { BaseLayers } from './map-layers';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild('map', { static: true })
  mapElement: ElementRef;

  map: Map;

  constructor(
    private apiServices: ApiService
  ) {

  }

  async ngOnInit() {

    this.map = new Map(
      this.mapElement.nativeElement,
      {
        center: [
          -12.425847783029134,
          -54.228515625
        ],
        zoom: 5,
        minZoom: 5,
        maxZoom: 18,
        zoomControl: true
      }
    );

    this.map.addLayer(BaseLayers.OSM.Standard.factoryLeafletTileLayer());

    //const states : GeoJsonObject = await this.apiServices.getStates().toPromise().then(r => r.data);

    //this.map.addLayer(geoJSON(states));
  }

  ngOnDestroy() {
    this.map.clearAllEventListeners;
    this.map.remove();
  };

}
