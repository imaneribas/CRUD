import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  
  constructor(private userservice:UserService,private route1: ActivatedRoute) { }

  ngOnInit(): void {
    
  }
save(){
  console.log("test");
}


getUser(): void {
//   const id = +this.route1.snapshot.paramMap.get('id');
//  console.log(this.userservice.usermodel[id]);
//  console.log(this.userservice.usermodel[id].Nom);
//  this.usermodel.Nom = this.usermodel[id].Nom;
//     this.usermodel.Prenom = this.usermodel[id].Prenom;
//     this.usermodel.email = this.usermodel[id].email;
//     this.usermodel.jobTitle = this.usermodel[id].jobTitle;
//     this.usermodel.Telephone = this.usermodel[id].Telephone;
//     console.log(this.usermodel)
  //     console.log('data', data);
  //this.userservice.getDimensions(id);
}
}
