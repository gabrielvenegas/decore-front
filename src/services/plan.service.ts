import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
@Injectable()
export class PlanService {
    url = environment.url;
    constructor(private http: HttpClient) { }

    getPlans() {
        return this.http.get(`${this.url}/plan`);
    }

    getProducts(idCategory?: number): Observable<any[]> {
        let params = '';
        if (idCategory) {
            params = `?idCategory=${idCategory}`
        } else {
            params = '';
        }
        return this.http.get<any[]>(`${this.url}/product${params}`);
    }

    getProduct(id) {
        return this.http.get<any>(`${this.url}/product/${id}`);
    }
}