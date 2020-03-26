import { Component, OnInit } from '@angular/core';
import { UserService } from "../../service/user.service";
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user:User

  constructor(private userMod:UserService) { }

  ngOnInit(): void {
    this.loggedin()
  }

  loggedin():boolean{
    if(localStorage.getItem('dataUser')){
      return true
    }else{
      return false
    }
  }

  logout(){
    localStorage.removeItem('dataUser')
  }

}
