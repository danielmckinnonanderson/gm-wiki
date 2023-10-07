import { Component, OnInit, OnDestroy } from '@angular/core';
import { PanZoomComponent, PanZoomConfig, PanZoomAPI, PanZoomModel, PanZoomConfigOptions } from 'ngx-panzoom';
import { Subscription } from 'rxjs';

@Component({
  selector: 'panzoom-plane',
  templateUrl: './panzoom-plane.component.html',
  styleUrls: ['./panzoom-plane.component.scss'],
  imports: [PanZoomComponent],
  standalone: true
})
export class PanzoomPlaneComponent implements OnInit, OnDestroy {

  panzoomConfig = new PanZoomConfig({
    zoomLevels: 5,
  });

  private modelChangedSubscription!: Subscription;
  private panZoomApi!: PanZoomAPI;
  private apiSubscription!: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.modelChangedSubscription = this.panzoomConfig.modelChanged.subscribe(model => {
      this.onModelChanged(model);
    });

    this.apiSubscription = this.panzoomConfig.api.subscribe(api => {
      this.panZoomApi = api;
    });
  }

  ngOnDestroy(): void {
    this.modelChangedSubscription.unsubscribe();
  }

  onModelChanged(model: PanZoomModel): void {
    console.info("Model", model);
  }

  public addChildNode(): void {

  }
}
