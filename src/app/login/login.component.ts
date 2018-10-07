import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { Login } from '../../models/login';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:Login;
  password:string;
  email:string;
  fullName:string;
  constructor(public http: HttpClient ,private router:Router,private _authService:AuthService) 
  {
this.model=new Login();
  }

  ngOnInit() {
    
  }
  onSubmit()
  {
      this._authService.loggedIn=true;
     this._authService.login(this.model)
        .subscribe(
          data =>{ console.log(data);
            let arr = [];
            for(let key in data){
             if(data.hasOwnProperty(key)){
               arr.push(data[key]);
             }
            }
            localStorage.setItem('token',arr[17]);//המיקום של ה string
            this.fullName=arr[1]+' '+arr[2];
            this._authService.full_name=this.fullName;
            debugger;
            this.router.navigate(['page/dashboard'])
        },
        err => {console.log(err);
          if(err.status === 401)
          swal("error!", "Error identifying user", "error");
         });
  }

}
