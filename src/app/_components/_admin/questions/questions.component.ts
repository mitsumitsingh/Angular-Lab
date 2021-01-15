import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from '@app/_models';
import { Subject } from 'rxjs';
import { QuestionService } from './../../../_services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {

  editorContent : String;

  form: FormGroup;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _formBuilder: FormBuilder,
    private _questionService : QuestionService,
    private router: Router
  )
  {
      this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
   
    this.form = this._formBuilder.group({
      moduleId : ['', Validators.required],
      subModuleName : ['', Validators.required],
      position : ['', Validators.required],
      question : ['', Validators.required],
      answer   : ['', Validators.required]
    });

  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  content(value) {
    console.log("Question Component Executed ...."+value);
    this.editorContent = value;
    this.form.patchValue({
      answer: value
    });
  }

  submit(){
    this._questionService.addQuestion(this.form.value).subscribe();
    this.reload();
  }

  reload() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/questions']);
  }

  questions;
  getQuestions(){
    this._questionService.getQuestions().subscribe(
      (response:Question[]) => {
        this.questions = response;
      }
    );
  }
}
