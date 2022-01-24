import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataDB } from '@core/interfaces/data.interface';



import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private readonly Url = environment.dataUrl;



  constructor(private httpClient: HttpClient) {

  }

  getAllData(): Observable<any> {
    return this.httpClient.get(this.Url)
      .pipe(
        catchError((err) => {
          console.log("Existe un error", err);

          return of([])
        })
      );
  }
}
