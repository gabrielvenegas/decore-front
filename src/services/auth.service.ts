import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {
    url = environment.url;
    constructor(public jwtHelper: JwtHelperService, private http: HttpClient) { }
    // ...

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    }

    login(user: any): Observable<any> {
        return this.http.post(`${this.url}/auth/login`, user);
    }
}