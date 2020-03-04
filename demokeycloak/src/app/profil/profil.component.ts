import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
Nom:string='imane';
Prenom:string='Sabir';
Email:string='sabimane100@gmail.com';
Role:string='admin';
Tel:string='06234567';
  constructor() { }

  ngOnInit(): void {
  }

}
