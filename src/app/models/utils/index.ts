export module Utils {
    export const LOGIN: string = "login";
    export const SERVER: string = "https://us-central1-jsondb-d8a6a.cloudfunctions.net/app";
    export interface IResponse {
        login: string;
        accessToken: string;
    }
    export interface IUser {
        login: string;
        password: string;
    }
}