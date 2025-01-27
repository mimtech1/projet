import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ApiReclamantService } from 'src/app/services/api-reclamant.service';
import { Reclamant } from 'src/app/models/Reclamant';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addUSR: FormGroup ;
  constructor(private apiService:ApiReclamantService, private toastr: ToastrService, private router:Router, private fb: FormBuilder) { 

    let formControls = {
      nom: new FormControl('', Validators.required ), 
      prenom: new FormControl('', Validators.required ), 
      tel: new FormControl('', [Validators.required,Validators.pattern("[0-9]+"),Validators.minLength(8), Validators.maxLength(8)] ), 
      mail: new FormControl('', [ Validators.required, Validators.email] ), 
      groupe: new FormControl('', Validators.required ), 
      role: new FormControl('', Validators.required ), 
      password: new FormControl('', Validators.required ),
    } 
    this.addUSR = this.fb.group(formControls)
  }

  get nom() { return this.addUSR.get('nom') }
  get prenom() { return this.addUSR.get('prenom') }
  get tel() { return this.addUSR.get('tel') } 
  get mail() { return this.addUSR.get('mail') }
  get groupe() { return this.addUSR.get('groupe') } 
  get role() { return this.addUSR.get('role') }
  get password() { return this.addUSR.get('password') } 

  ngOnInit(): void {
  }

  saveReclamant(){
    let data = this.addUSR.value;  
    let reclamant = new Reclamant(null, data.nom, data.prenom, data.tel, data.mail, data.role, data.groupe, data.password);
    this.apiService.addReclamant(reclamant).subscribe(data=>{
      console.log("RES : "+data);
      if(data['RESPONSE']=="ERROR"){ 
        this.toastr.error('Erreur d\'ajout', 'Error',{timeOut: 2000});
      }else {   
        this.toastr.success('Inscription effectuée avec succès', 'Succès',{timeOut: 2000});
        this.router.navigate(['/login'])
      }
  }, error=>console.log("ERROR : "+error)); 
  }

}
