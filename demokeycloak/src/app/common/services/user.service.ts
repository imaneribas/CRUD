import { Injectable } from '@angular/core';

import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserModel } from 'src/app/Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
// public usermodel:UserModel[]=[
//   {
//      id: '0',
//      Nom: 'imane',
//    Prenom: "sabir",
//     email: "sab@gmail.com",
//     jobTitle: "admin",
//     Telephone: "0612345678",
   
//   },
//   {
//     id: '1',
//     Nom: 'imanbbbbe',
//   Prenom: "sabiddr",
//    email: "saswdb@gmail.com",
//    jobTitle: "admindwd",
//    Telephone: "061234335678",
  
//  },
//  {
//   id: '2',
//   Nom: 'imanqqqqqe',
// Prenom: "sabiqqqqqr",
//  email: "sabqqqq@gmail.com",
//  jobTitle: "admin",
//  Telephone: "0612345678",

// }
// ];
// userSubject = new Subject<UserModel[]>();
  constructor(private http:HttpClient) { }
  // emitUsers() {
  //   this.userSubject.next(this.usermodel.slice());
  // }

  // addUser(user: UserModel) {
  //   this.usermodel.push(user);
  //   this.emitUsers();
  // }
//   deleteuser(id){
//     console.log(this.usermodel[id]);
//   for(var i=0;i<this.usermodel.length;i++){
//     if(this.usermodel[i]["id"]==id){
// this.usermodel.splice(i,1);
//     }
//   }
  
//   this.emitUsers();
//   }


//   getDimensions(id) {
//     var obj = this.usermodel.filter(function(node) {
//         return node.id==id;
//     });

//     return console.log(obj);   
// }
// onUpdateUser(id){

// }
private users_URL=environment.API_URL+'/User';

 GetAllUsers():Observable<UserModel[]>{
  return this.http.get<UserModel[]>(this.users_URL+'/GetAllUsers');
}








}