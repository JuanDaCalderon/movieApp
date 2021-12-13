import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  signInForm!: FormGroup;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required)
    })
  }

  onSubmit(){
    let userName:string = this.signInForm.get('userName')?.value;
    let email:string = this.signInForm.get('email')?.value;
    let password:string = this.signInForm.get('password')?.value;
    let password2:string = this.signInForm.get('password2')?.value;
    /* REVISA QUE NO ESTEN VACIOS LOS CAMPOS */
    if(userName==="") alert("Todos los campos se deben llenar");
    else if(email==="") alert("Todos los campos se deben llenar");
    else if(password==="") alert("Todos los campos se deben llenar");
    else if(password2==="") alert("Todos los campos se deben llenar");
    else if(password!== password2) alert("Las contraseñas no coinciden")
    else {
      /* HACE EL REGISTRO Y LOGEO DE UNA*/
      this.router.navigate(['/listado']);
    }
  }

}
