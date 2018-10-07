import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TokenInterceptor } from './auth/token-interceptor';
import { AuthService } from './auth/auth.service';


const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path:'page/dashboard',component:DashboardComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
  
   
  ],
  imports: [
    BrowserModule,
    [BrowserAnimationsModule],
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
  ],
  exports:[
    MatFormFieldModule,
    
    MatInputModule,
  ],
  providers: [[AuthService],
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
