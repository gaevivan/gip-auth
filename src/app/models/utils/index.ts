export module Utils {
    export const STORAGE_KEY: string = "jwt";
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