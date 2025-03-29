import { Injectable } from '@angular/core';
import { Email } from '../../interface/email';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EnviaEmailService {

  constructor(private http: HttpClient) { }

  enviarEmail(email: Email){
    return this.http.post(environment.api_url + "/emailExterno/envia", email);
  }
}
