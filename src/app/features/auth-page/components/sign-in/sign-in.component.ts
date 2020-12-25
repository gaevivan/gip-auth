import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "sign-in",
    templateUrl: "sign-in.component.html"
})
export class SignInComponent {
    public login: string;
    public password: string;

    constructor(
        private readonly router: Router
    ) {}

    public navigateToSignUp(): void {
        this.router.navigate(['sign-up']);
    }
}
