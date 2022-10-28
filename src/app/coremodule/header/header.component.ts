import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  getemail:any = localStorage.getItem('email')
  constructor() { }

  ngOnInit(): void {
   
  }

  logout(){
    localStorage.clear()
    this.getemail = localStorage.removeItem('email')
  }

}
