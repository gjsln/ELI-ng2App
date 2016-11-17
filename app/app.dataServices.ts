import {Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppComponent } from './app.component';

@Injectable()
export class DataService {
    constructor(private http:Http) { }
    // Uses http.get() to load a single JSON file
    getStudData() {
        return this.http.get('./data/studentTableData.json').map((res:Response) => res.json());
    }
}