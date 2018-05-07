import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class FirebaseServiceProvider {
  constructor(public http: HttpClient) {
    console.log("Hello FirebaseService Provider");
  }
}
