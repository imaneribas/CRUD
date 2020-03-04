import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { UserModel } from '../Model/user.model';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userForm: FormGroup;
  //users:UserModel[]=[];
  constructor(private formBuilder: FormBuilder,private router: Router,private userservice:UserService) { 
    //this.users=userservice.usermodel;
  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      Nom: ['', Validators.required],
      Prenom: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      jobTitle: ['', Validators.required],
      Telephone: ['', Validators.required],
    });
}
onSubmitForm() {
  const formValue = this.userForm.value;
  const newUser = new UserModel(
   this.userservice.usermodel.length.toString(),
    formValue['Nom'],
    formValue['Prenom'],
    formValue['email'],
    formValue['jobTitle'],
    formValue['Telephone'],
    
  );
  this.userservice.addUser(newUser);
  this.router.navigate(['/users']);
}
}
