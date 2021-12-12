import { Injectable } from '@angular/core';
import { interval, Observable,throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
@Injectable()
export class LocationService {
  constructor(private http: HttpClient) {}
  public getIssLocations(): Observable<any> {
    const url = `http://api.open-notify.org/iss-now.json`;
    return this.http.get(url).pipe(map((res) => res), catchError( (error: any) => throwError(error)));;
  }


}
