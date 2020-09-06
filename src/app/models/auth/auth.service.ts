import { Injectable } from "@angular/core";
import { Utils } from '../utils';
import { Location } from "@angular/common";
import { BehaviorSubject } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    /** Режим: регистрация. */
    public isRegisterMode: boolean = false;
    /** Логин. */
    public userData: Utils.IUser = {
        login: null,
        password: null
    };
    /** Второй пароль. */
    public verifyPassword: string;
    /** Прогресс загрузки. */
    public inProgress: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        public httpClient: HttpClient,
        private location: Location
    ) {}

    /** Валидация для роутинга. */
    public canActivate(): boolean {
        if (window.localStorage.getItem(Utils.LOGIN)) {
            this.location.back();
        }
        return true;
    }

    /** Вход. */
    public login(): void {
        this.httpClient.post<Utils.IResponse>(`${Utils.SERVER}/signIn`, this.userData).pipe(
            filter(response => !!response.accessToken),
            tap(response => window.localStorage.setItem("login", response.login)),
            tap(() => this.location.back())
        ).subscribe();
    }

    /** Регистрация. */
    public register(): void {
        if (this.userData.password !== this.verifyPassword) {
            window.alert("Пароли не совпадают.");
            return;
        }
        this.httpClient.post<Utils.IResponse>(`${Utils.SERVER}/signUp`, this.userData).pipe(
            filter(response => !!response.accessToken),
            tap(response => window.localStorage.setItem("login", response.login)),
            tap(() => this.location.back())
        ).subscribe();
    }

    /** Переключение между режимами авторизации и регистрации. */
    public toggle(): void {
        this.isRegisterMode = !this.isRegisterMode;
    }
}