import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  @Output() editorEvent = new EventEmitter<string>();

  data : '';
  config = {
    uiColor: "#ffffff",
    toolbarGroups: [
      { name: "clipboard", groups: ["clipboard", "undo"] },
      { name: "editing", groups: ["find", "selection", "spellchecker"] },
      { name: "links" },
      { name: "insert" },
      { name: "document", groups: ["mode", "document", "doctools"] },
      { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
      { name: "paragraph", groups: ["list", "indent", "blocks", "align"] },
      { name: "styles" },
      { name: "colors" }
    ],
    skin: "kama",
    resize_enabled: true,
    removePlugins: "elementspath,save,magicline",
    extraPlugins: "divarea,smiley,justify,indentblock,colordialog",
    colorButton_foreStyle: {
      element: "font",
      attributes: { color: "#(color)" }
    },
    height: 188,
    removeDialogTabs: "image:advanced;link:advanced",
    removeButtons: "Subscript,Superscript,Anchor,Source,Table",
    format_tags: "p;h1;h2;h3;pre;div"
  };

  constructor() { }

  ngOnInit(): void {
  }

  editorContent(){
    this.editorEvent.emit(this.data);
  }

}
