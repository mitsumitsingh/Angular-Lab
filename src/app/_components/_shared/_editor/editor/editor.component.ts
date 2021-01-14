import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';

import jsonDoc from "../doc";
import schema from "../schema";
import plugins from "../plugins";
import nodeViews from "../nodeviews";

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  @Output() editorEvent = new EventEmitter<string>();

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

  editorContent(editorContent){
    console.log(editorContent);
    this.editorEvent.emit(editorContent);
  }

}
