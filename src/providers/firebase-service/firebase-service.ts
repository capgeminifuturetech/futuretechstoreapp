import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class FirebaseService {
  constructor(public http: HttpClient) {
    console.log("Hello FirebaseService Provider");
  }
}
