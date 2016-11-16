import {Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { IdentityComponent } from './app.identity.component';

@Injectable()
export class OCRDataService {
    constructor(private http:Http) { }
    getIdentityInfo() {
        return this.http.get('./app/identitydata.json').map((res:Response) => res.json());
    }

    getAddressInfo() {
        return this.http.get('./app/addressdata.json').map((res:Response) => res.json());
    }

    getSalaryInfo() {
        return this.http.get('./app/salarydata.json').map((res:Response) => res.json());
    }
    
}