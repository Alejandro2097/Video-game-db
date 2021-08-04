import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptors implements HttpInterceptor{
    constructor() {}
    
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>>{
        req = req.clone({
            setHeaders:{
                'x-rapidapi-key': '73be16f49amsh180d7f374ed6b80p17dac1jsnd05e003ee62e',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams:{
                key: 'e40e743af2c94b0c916a8aa618fb4473',
            }
        });
        return next.handle(req);
    }
}