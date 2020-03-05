import { Component, OnInit } from '@angular/core';

import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/common/services/user.service';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  userForm:FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,private userservice:UserService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['',  Validators.required],
      email: ['', [Validators.required,Validators.email]],
      phoneNumber: ['', Validators.required],
      DateOfRegistration: ['', Validators.required],
    });
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
