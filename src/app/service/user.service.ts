import { Injectable } from '@angular/core'; //Permite la inyeccion de servicios en otros componentes o clases
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs"; //Httpclient lo requiere es una coleccion de eventos

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = 'http://localhost:3000/api'

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 
   * @param userParams datos del usuario
   */

  signUp(userParams) {
    console.log(userParams)
    const params = JSON.stringify(userParams)//Se convierten los parametros que se envien en tipo json
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) } //Lo recibe como un tipo json
    return this.http.post(
      this.apiURL + '/createUser',
      params,
      options
    ).pipe(res => res)
  }

  login(userParams) {
    const params = JSON.stringify(userParams)
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return this.http.post(this.apiURL + '/loginUser', params, options)
      .pipe(res => res)
  }

  updateUser(userParams) {
    const params = JSON.stringify(userParams)
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return this.http.put(`${this.apiURL}/updateUser/${userParams._id}`,
      params,
      options)
      .pipe(res => res)
  }



}
