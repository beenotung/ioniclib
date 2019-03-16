import {ToastController, ToastOptions} from "ionic-angular";

export let defaultToastOption: ToastOptions = {
  dismissOnPageChange: true,
  duration: 2000,
};

export function showToast(toastCtrl: ToastController, opts?: ToastOptions) {
  opts = Object.assign({}, defaultToastOption, opts);
  opts = opts || {};
  const toast = toastCtrl.create(opts);
  return new Promise((resolve, reject) => {
    toast.onDidDismiss((data, role) => {
      resolve(data);
    });
    toast.present();
  });
}
