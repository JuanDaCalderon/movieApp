import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      remember: new FormControl(false)
    })
  }

  onSubmit(){
    let email:string = this.loginForm.get('email')?.value;
    let password:string = this.loginForm.get('password')?.value;
    let remeber:boolean = this.loginForm.get('remember')?.value;
    /* REVISA QUE NO ESTEN VACIOS LOS CAMPOS */
    if(email==="") alert("Todos los campos se deben llenar");
    else if(password==="") alert("Todos los campos se deben llenar");
    else this.router.navigate(['/listado']);
  }
}
