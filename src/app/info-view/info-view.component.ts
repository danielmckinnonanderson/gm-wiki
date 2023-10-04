import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from '../db.service';
import { NPC } from 'src/data/data.types';

@Component({
  selector: 'app-info-view',
  templateUrl: './info-view.component.html',
  styleUrls: ['./info-view.component.scss']
})
export class InfoViewComponent implements OnInit {

  infoFor: NPC | null = null;
  
  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
             private readonly dbSvc: DbService) {}

  ngOnInit(): void {
    const uuid = this.route.snapshot.url[1];
    if (!uuid) {
      console.warn("Bad");
    }

    const value = this.dbSvc.getById(uuid.toString());
    if (!value) {
      console.warn("Bad again");
      this.router.navigate(["search"]);
      return;
    }

    this.infoFor = value;
  }
}
