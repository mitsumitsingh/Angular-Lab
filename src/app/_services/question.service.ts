import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from './../_models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  addQuestion(question : Question): Observable<any> {
    return this.http.post<any>('http://localhost:8085/api/question', question)
      .pipe(
        map((data: Question) => {
          console.log(data);
          return data;
        })
      )
  }

  getQuestions(): Observable<any> {
    return this.http.get<any>('http://localhost:8085/api/questions')
      .pipe(
        map((data: Question[]) => {
          console.log(data);
          return data;
        })
      )
  }

}
