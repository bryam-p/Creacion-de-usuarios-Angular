import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { UserService } from "../../service/user.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User 

  constructor(private service:UserService) { 
    this.user = new User()
  }

  ngOnInit(): void {
  }

  signUp(){
    this.service.signUp(this.user)
    .subscribe((data:any)=>{
      if (data.statusCode !== 200) {
        alert('Error al crear el usuario')
      }else{
        alert('Usuario creado correctamente')
      }
    })
  }

}
