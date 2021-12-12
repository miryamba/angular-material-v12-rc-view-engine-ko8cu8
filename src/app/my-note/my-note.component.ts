import { Component, OnInit } from '@angular/core';
import { LocationService } from './../location.service';

@Component({
  selector: 'app-my-note',
  templateUrl: './my-note.component.html',
  styleUrls: ['./my-note.component.css'],
})
export class MyNoteComponent implements OnInit {
  public myIss: string;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locationService.getIssLocations().subscribe(
      (iss) => (this.myIss = iss),
      (err) => alert(err.message)
    );
  }
}
