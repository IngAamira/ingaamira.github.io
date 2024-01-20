import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  private workExperienceDataUrl = '../../../../assets/i18n/en.json';

  constructor(private http: HttpClient) {}

  getWorkExperienceData(): Observable<any> {
    return this.http.get<any>(this.workExperienceDataUrl);
  }
  
}
