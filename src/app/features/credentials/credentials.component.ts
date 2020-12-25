import { Component } from "@angular/core";
import { environment } from "@environment";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent {
  public readonly version$: BehaviorSubject<number> = new BehaviorSubject<number>(environment.version);
}