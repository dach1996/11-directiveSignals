import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({ providedIn: 'root' })
export class UserServiceService {
  public httpClient = inject(HttpClient);
  constructor() { }

  private baseURl = 'https://reqres.in/api/users'

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<SingleUserResponse>(`${this.baseURl}/${id}`)
      .pipe(
        map(m => m.data),
        tap(m => console.log(m))
      )
  }
}