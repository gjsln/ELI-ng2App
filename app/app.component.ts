import { Component } from '@angular/core';
import { DataService } from './app.dataServices';

@Component({
    selector: 'student-app',
    providers: [DataService],
    templateUrl: 'app/app.component.html',
})

export class AppComponent { 
  constructor(private _DataService: DataService) { }

  public stud:any;

  ngOnInit() {
    this.getStudData();
  }

  getStudData() {
    this._DataService.getStudData().subscribe(
      // the first argument is a function which runs on success
      data => { this.stud = data.empData},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }
}
