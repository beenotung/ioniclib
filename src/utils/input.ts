import {TextInput} from "ionic-angular";

export function setFocus(e: TextInput) {
  setTimeout(() => {
    if (!e.isFocus()) {
      e.setFocus();
      setTimeout(() => {
        if (!e.isFocus()) {
          e.setFocus();
        }
      }, 350);
    }
  }, 37);
}
