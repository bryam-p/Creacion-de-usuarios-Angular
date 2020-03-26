import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { UserService } from "../../service/user.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User

  constructor(
    private service:UserService,
    private router:Router
  ) { 
    this.user = new User()
  }

  ngOnInit(): void {
  }

  login() {
    this.service.login(this.user)
    .subscribe((data:any)=>{
        switch (data.statusCode) {
          case 400:
            alert('El usuario no esta registrado')
          break;
          case 401:
            alert('Los datos no son correctos')
          break;
          case 200:
          alert('Bienvenido')
          console.log(data)
          localStorage.setItem('dataUser', JSON.stringify(data.dataUser)) //recibe el parametrso que llega desde el backend
          this.router.navigate[('/todaLaMusica')]
          break;
          default:
            alert('Error de conexion')
        }
    })
  }

 

}
