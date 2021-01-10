import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  editorContent : String;

  ngOnInit(): void {
   
  }

  ngOnDestroy(): void {
  }

  content(value) {
    console.log("Question Component Executed ...."+value);
    this.editorContent = value;
  }

}
