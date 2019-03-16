import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'upload-button',
  templateUrl: './upload-button.component.html',
  styleUrls: ['./upload-button.component.scss'],
})
export class UploadButtonComponent {
  @Input()
  text: string;

  @Input()
  _multiple?: boolean;

  @Input()
  _accept?: string;

  @Input()
  icon: string = 'cloud-upload';

  @Input()
  _color: string = 'primary';

  @Output()
  addFiles = new EventEmitter<FileList>();

  @ViewChild('input')
  navtiveBtnRef: ElementRef;

  /*
  constructor(private renderer: Renderer) {
    console.log("Hello UploadButton Component");
  }
  */

  selectFile() {
    /*
    let event = new MouseEvent("click", {bubbles: true});
    this.renderer.invokeElementMethod(
      this.navtiveBtnRef.nativeElement
      , "dispatchEvent"
      , [event]
    );
    */
    (this.navtiveBtnRef.nativeElement as HTMLButtonElement).click();
  }

  addFile() {
    const files: FileList = this.navtiveBtnRef.nativeElement.files;
    this.addFiles.emit(files);
  }
}
