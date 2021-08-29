import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private httpClient: HttpClient) {
  }
  getQuestions() {
    return this.httpClient.get<any>(`${environment.backendEndpoint}/api/questions`).pipe(
      map(response => response)
    );
  }
}
