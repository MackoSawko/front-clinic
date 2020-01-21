import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Base url
  private userUrl = 'http://localhost:8080/user';

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {}

  public findAll(): Observable<User[]> {
    console.log(this.http.get<User[]>(this.userUrl));
    return this.http.get<User[]>(this.userUrl);
  }


  public save(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }


}
