import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  private workExperienceDataUrl = '../../../../assets/i18n/en.json';

  private handleError(error: any) {
    if (error.status === 0) {
      console.error('Error de red:', error);
    } else if (error.status >= 500) {
      console.error('Error del servidor:', error);
    } else {
      console.error('Error desconocido:', error);
    }
    return of([]);
  }

  constructor(private http: HttpClient) {}

  getWorkExperienceData(): Observable<any> {
    return this.http.get<any>(this.workExperienceDataUrl);
  }

  public getObjetive(pattern: string) {
    return this.getWorkExperienceData().pipe(
      map(data => Object.keys(data).filter(key => key.startsWith(pattern))),
      catchError(error => this.handleError(error))
    );
  }

  clearAndPush(array: string[], ...elements: string[]) {
    if (array) {
      array.length = 0;
      array.push(...elements);
    }
  }

}
