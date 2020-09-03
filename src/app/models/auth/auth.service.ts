import { Injectable } from "@angular/core";
import { Utils } from '../utils';
import { Location } from "@angular/common";

@Injectable()
export class AuthService {
    /** Вход, а не регистрация. */
    public isSignIn: boolean = true;
    /** Логин. */
    public login: string;
    /** Пароль. */
    public password: string;
    /** Второй пароль. */
    public secondPassword: string;
    /** Текущий пользователь */
    public currentUser: Utils.Types.IUser = null;

    constructor(
        private location: Location
    ) {}

    /** Валидация для роутинга. */
    public canActivate(): boolean {
        if (this.currentUser) {
            this.location.back();
        }
        return !this.currentUser;
    }

    /** Вход. */
    public signIn(): void {
        console.log(this.login, this.password);
        // this.location.back();
    }

    /** Вход. */
    public signUp(): void {
        if (this.password !== this.secondPassword) {
            window.alert("Пароли не совпадают.");
            return;
        }
        console.log(this.login, this.password);
        // this.location.back();
    }

    /** Переключение режима авторизации и регистрации. */
    public toggle(): void {
        this.isSignIn = !this.isSignIn;
    }
}