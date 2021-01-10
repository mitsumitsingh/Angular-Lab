import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';

import jsonDoc from "./doc";
import schema from "./schema";
import plugins from "./../plugins";
import nodeViews from "./../nodeviews";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  editordoc = jsonDoc;

  editor: Editor;
  toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];

  form = new FormGroup({
   // editorContent: new FormControl(jsonDoc, Validators.required)
    editorContent: new FormControl('', Validators.required)
  });

  get doc(): AbstractControl {
    return this.form.get("editorContent");
  }

  ngOnInit(): void {
    this.editor = new Editor({
      schema,
      plugins,
      nodeViews
    });
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  value(){
    console.log(this.form.value['editorContent']);
  }
}
