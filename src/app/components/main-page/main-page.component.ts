import { Component } from '@angular/core';
import { AuthService } from '@models/auth';

@Component({
    selector: "main-page",
    templateUrl: "main-page.component.html"
})
export class MainPageComponent {
    constructor(public auth: AuthService) {}

    public ngOnInit(): void {
        this.auth.userData = {
            login: null,
            password: null
        };
    }
}