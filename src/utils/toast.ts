import {ToastController, ToastOptions} from "ionic-angular";

export function showToast(toastCtrl: ToastController, opts?: ToastOptions) {
  opts = opts || {};
  if (opts.dismissOnPageChange === undefined) {
    opts.dismissOnPageChange = true;
  }
  if (opts.duration === undefined) {
    opts.duration = 2000;
  }
  const toast = toastCtrl.create(opts);
  return new Promise((resolve, reject) => {
    toast.onDidDismiss((data, role) => {
      resolve(data);
    });
    toast.present();
  });
}
