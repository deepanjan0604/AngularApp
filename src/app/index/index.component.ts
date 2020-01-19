import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  name:string;
  constructor(private _activateRoute:ActivatedRoute) {
    this.name=this._activateRoute.snapshot.params['name'];
   }

  ngOnInit() {
  }

}
