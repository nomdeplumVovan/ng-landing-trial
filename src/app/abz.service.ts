import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Position } from './position';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AbzService {
  public users: Array<User>;
  public positions: Array<Position>;

  private endpoint = 'https://frontend-test-assignment-api.abz.agency';


  constructor(private http: HttpClient) { }

  getUsers(page = 1, count = 5) {

    return this.http.get(`${this.endpoint}/api/v1/users?page=${page}&count=${count}`);
  }

  getPositions() {
      return this.http.get(`${this.endpoint}/api/v1/positions`);
  }

}






