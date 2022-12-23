import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userFormGroup! : FormGroup;

  constructor() { 
    
  }

  ngOnInit(): void {

    this.userFormGroup= new FormGroup({

      username : new FormControl('',[Validators.required]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)])

    });
  }
handleLogin(){

}
}
