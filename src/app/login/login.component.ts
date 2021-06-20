import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  error = '';
  loading = false;
  date = new Date().getFullYear();
  isTextFieldType!: boolean;
  errorMessage: String = "";
  hasError: Boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      //rememberMe: [false],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  get loginError(){
    return {
      errorMessage: this.errorMessage,
      hasError: this.hasError
    }
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.error = 'Korisničko ime ili lozinka nisu pravilni!';
      return;
    }

    this.loading = true;
    // this.loginService
    //   .login(this.f.username.value, this.f.password.value, this.f.rememberMe.value)
    //   .pipe(first())
    //   .subscribe(
    //     (data) => {
    //       // this.clientService.init();
    //       // this.dataService.initUser();
    //       if(data){
    //         console.log(data)
    //         this.router.navigate(['']);
    //       } else {
    //         this.errorMessage = this.loginService.errorMessage
    //         this.hasError = this.loginService.hasError
    //         this.loading = false;
    //       }
    //       //(data)
    //     },
    //     (error) => {
    //       this.error = 'Korisničko ime ili lozinka nisu pravilni!';
    //       this.loading = false;
    //     }
    //   );
  }
  togglePasswordFieldType(){
    this.isTextFieldType = !this.isTextFieldType;
  }


}
