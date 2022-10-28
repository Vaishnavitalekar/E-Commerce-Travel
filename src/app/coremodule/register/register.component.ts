import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterserviceService } from 'src/app/service files/registerservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private _service:RegisterserviceService, private _route:Router) { }
  registerform = this.fb.group({
    fname:['',Validators.required],
    lname:['',Validators.required],
    birthdate:[''],
    female:[''],
    male:[''],
    email:['',Validators.required],
    password:['',Validators.required]
  })


  ngOnInit(): void {
  }

  register(){
    // console.log(this.registerform.value)
    this.registerform.markAllAsTouched()

    if(this.registerform.valid){
      console.log(this.registerform.value)
      // console.log(this.registerform.value.male)
      this._service.adduser(this.registerform.value).subscribe(()=>{})
      this.registerform.reset()
      alert('Registered Successfully')
      this._route.navigate(['/login'])
      


    }else{
      alert('Enter Valid Details')
    }

  }

}
