import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NotAuthGuard implements CanActivate {
    public canActivate(): Observable<boolean> | boolean {
        return true;
    }
}