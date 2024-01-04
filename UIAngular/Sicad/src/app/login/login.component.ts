import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, AbstractControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  applyForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl('')
  });
  //submitted = false;
  authService: AuthService = inject(AuthService);
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.onReset();
  }
  onSubmit() {
    this.authService.submitAuth(
      this.applyForm.value.email ?? '',
      this.applyForm.value.pass ?? '',
    );
    //this.submitted = true;
    if (this.applyForm.errors||!this.authService.logged) {
      return;
    }
    this.router.navigate(['/home'], { });
    console.log(JSON.stringify(this.applyForm.value, null, 2));
  }
  ngOnInit() {
    this.applyForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      pass: ['', Validators.required]
    });
  }
  // funcción que sirve para acceder a los controles del formulario con "f" en lugar de this.applyForm.controls.email (no necesario)
  get f(): { [key: string]: AbstractControl } {
    return this.applyForm.controls;
  }

  onReset() {
    //this.submitted = false;
    this.applyForm.reset();
    this.authService.token = '';
  }
}
