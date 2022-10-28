import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterserviceService } from 'src/app/service files/registerservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform = new FormGroup({
    emailid: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
  })

  userlist: any;
  result: any;
  constructor(private _service: RegisterserviceService, private _route: Router) { }

  ngOnInit(): void {
    this._service.getuser().subscribe((res) => {
      this.userlist = res
    })

  }

  login() {
    console.log(this.loginform)
    this.loginform.markAllAsTouched()
    if (this.loginform.valid) {
      this.result = this.userlist.filter((res: any) => {
        return (this.loginform.value.emailid == res.email && this.loginform.value.pass == res.password)

      })
     console.log(this.result)
      if (this.result.length > 0) {
        alert('login successfully')
        this._route.navigate(['/flightbooking'])
         localStorage.setItem('userid',this.result[0].id)
         localStorage.setItem('userlogin','true')
      } else {
        alert('No Such user present ')
      }


    }
    else {
      alert('Please enter required fields')
    }
  }

}


