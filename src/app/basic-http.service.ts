import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Configuration } from './appconstants';

@Injectable()
export class HttpDataService {

    private actionUrl: string;

    constructor(private http: HttpClient, private configuration: Configuration) {
        this.actionUrl = configuration.serverWithApiUrl;
    }

    public getAll<T>(apiName:string, cond:string): Observable<T> {

         var url = this.actionUrl + apiName + "?" + cond + '&' + this.configuration.key;
        return this.http.get<T>(url);
    }

    public getSingle<T>(id: number): Observable<T> {
        return this.http.get<T>(this.actionUrl + id);
    }

    public add<T>(itemName: any, apiName:string): Observable<T> {
        const toAdd = itemName;
var url = this.actionUrl + apiName + "?" + this.configuration.key;
console.log(url);
console.log(JSON.stringify(toAdd));
        return this.http.post<T>(url, toAdd);
    }

    public update<T>(id: string, itemToUpdate: any,apiName:string): Observable<T> {
        return this.http
            .put<T>(this.actionUrl  + apiName + "/" + id + "?" + this.configuration.key, itemToUpdate);
    }

    public delete<T>(id: number): Observable<T> {
        return this.http.delete<T>(this.actionUrl + id);
    }
}


// @Injectable()
// export class CustomInterceptor implements HttpInterceptor {

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         if (!req.headers.has('Content-Type')) {
//             req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
//         }

//         req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
//         return next.handle(req);
//     }
// }