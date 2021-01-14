import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Lang} from '../models/lang.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LangService {

  constructor(private http: HttpClient) {}

  private langUrl = 'http://localhost:8080/starfood/langs';

  public getLangs() {
    return this.http.get<Lang[]>(this.langUrl);
  }

  public deleteLang(lang) {
    return this.http.delete(this.langUrl + '/' + lang.langId);
  }

  public createLang(lang) {
    return this.http.post<Lang>(this.langUrl, lang);
  }

}
