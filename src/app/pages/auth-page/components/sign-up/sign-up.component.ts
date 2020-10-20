import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "sign-up",
    templateUrl: "sign-up.component.html"
})
export class SignUpComponent {
    public login: string;
    public password: string;
    public verifiedPassword: string;

    constructor(
        private readonly router: Router
    ) {}

    public navigateToSignIn(): void {
        this.router.navigate(['sign-in']);
    }
}
