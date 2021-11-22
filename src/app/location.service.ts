import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LocationService {
  public getIssLocations(): Observable<string> {
    return this.http.get<string>('http://api.open-notify.org/iss-now.json');
  }

  constructor(private http: HttpClient) {}
}
