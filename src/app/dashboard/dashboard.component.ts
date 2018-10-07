import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
fullName:string;


  constructor(private route: ActivatedRoute,private _AuthService:AuthService ) { }

  ngOnInit() {
  this.fullName=this._AuthService.full_name;
  }
}
