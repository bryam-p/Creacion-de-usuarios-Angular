import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { UserService } from "../../service/user.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user:User

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('dataUser'))
  }

  updateUser(){
    this.service.updateUser(this.user)
    .subscribe((data:any)=>{
      switch (data.statusCode) {
        case 500:
          alert('Error en el servidor')
        break;
        case 400:
          alert('Error al modificar los datos')
        break;
        case 200:
          alert('Datos modificados correctamente')
          console.log(data.dataUser)
        break;
        default:
          alert('Algo salio mal')
        
        break;
      }
    })
  }

}
