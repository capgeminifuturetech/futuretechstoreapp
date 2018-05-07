import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class ChatbotServiceProvider {
  private baseURL: string = "https://api.dialogflow.com/v1/query?v=20150910";
  private token: string = "08ed1a9e86fa47378fdaf9219bd5e0e2";

  constructor(public http: HttpClient) {
    console.log("Hello ChatbotServiceProvider Provider");
  }

  getHeaders() {
    let headers = new Headers();
    headers.append("Authorization", "Bearer ${this.token}");
    return headers;
  }

  getResponse(query: string) {
    let data = {
      query: query,
      lang: "en",
      sessionId: "12345"
    };
    return this.http.post("${this.baseURL}", data).map(res => {
      return res;
    });
  }
}
