import { Injectable } from "@angular/core";
import { Utils } from '../utils';
import { Location } from "@angular/common";
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { tap, filter, catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    /** Отображение формы. */
    public display = false;
    /** Режим: регистрация. */
    public isRegisterMode: boolean = false;
    /** Данные пользователя. */
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
    public canActivate(): Observable<boolean> {
        const jwt: string = window.localStorage.getItem(Utils.STORAGE_KEY);
        if (!jwt) {
            this.display = true;
            return of(true);
        }
        return this.httpClient.post(`${Utils.SERVER}/is-signed`, {jwt}).pipe(
            map(() => {
                this.location.back();
                return false;
            }),
            catchError(() => {
                window.localStorage.removeItem(Utils.STORAGE_KEY);
                this.display = true;
                return of([]);
            }),
            map(() => true)
        );
    }

    /** Вход. */
    public login(): void {
        this.httpClient.post<Utils.IResponse>(`${Utils.SERVER}/sign-in`, this.userData).pipe(
            filter(response => !!response.accessToken),
            tap(response => window.localStorage.setItem(Utils.STORAGE_KEY, response.accessToken)),
            tap(() => this.location.back())
        ).subscribe();
    }

    /** Регистрация. */
    public register(): void {
        if (this.userData.password !== this.verifyPassword) {
            window.alert("Пароли не совпадают.");
            return;
        }
        this.httpClient.post<Utils.IResponse>(`${Utils.SERVER}/sign-up`, this.userData).pipe(
            filter(response => !!response.accessToken),
            tap(response => window.localStorage.setItem(Utils.STORAGE_KEY, response.accessToken)),
            tap(() => this.location.back()),
            catchError((error) => this.userExistError(error.error))
        ).subscribe();
    }

    /** Переключение между режимами авторизации и регистрации. */
    public toggle(): void {
        this.isRegisterMode = !this.isRegisterMode;
    }

    /** Ошибка уже существующего пользователя. */
    private userExistError(text: string): Observable<never> {
        alert(text);
        return throwError(text);
    }
}