import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


    userForm!: FormGroup;
    smeForm!: FormGroup;

    loading = false;
    submitted = false;
    error = '';

    list = ["A","B","C","D","E","F"];

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        // redirect to home if already logged in
        // if (this.authenticationService.userValue) {
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            isLegal: [false, Validators.requiredTrue],
            companyName: ['', Validators.required],
            mst: ['', Validators.required],
            kd:[]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.userForm.controls; }

    get sme() { return this.smeForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }

        this.error = '';
        this.loading = true;
        this.authenticationService.login(this.f['username'].value, this.f['email'].value)
            .pipe(first())
            .subscribe({
                next: () => {
                    // get return url from route parameters or default to '/'
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                    this.router.navigate([returnUrl]);
                },
                error: error => {
                    this.error = error;
                    this.loading = false;
                }
            });
    }

}
