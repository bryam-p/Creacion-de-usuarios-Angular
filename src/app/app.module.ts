import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"; //importar forms
import { Routes,RouterModule } from "@angular/router";

import { UserService } from "./service/user.service"; //llamado al servicio

import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { MusicComponent } from './components/music/music.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const appRoutes: Routes = [
  {
    path:'todaLaMusica', component: MusicComponent
  },
  {
    path:'', component: SaludoComponent
  },
  {
    path:'register', component: SignUpComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'update', component:UpdateUserComponent
  }
]

@NgModule({
  declarations: [ //aca los componentes
    AppComponent,
    SaludoComponent,
    MusicComponent,
    NavComponent,
    FooterComponent,
    SignUpComponent,
    LoginComponent,
    UpdateUserComponent,
  ],
  imports: [ //aca se agregan los modulos
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
