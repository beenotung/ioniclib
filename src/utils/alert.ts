import {AlertController, AlertOptions} from "ionic-angular";

export let defaultAlertOptions: AlertOptions = {
  buttons: ['Ok']
};

export function showAlert(alertCtrl: AlertController, options: AlertOptions) {
  options = Object.assign({}, defaultAlertOptions, options);
  const alert = alertCtrl.create(options);
  return new Promise((resolve, reject) => {
    alert.onDidDismiss(resolve);
    alert.present();
  });
}
