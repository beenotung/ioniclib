import {ModalController, ModalOptions} from "ionic-angular";

export async function showModal<A>(modalCtrl: ModalController, component: object | string, data?: any, opts?: ModalOptions): Promise<A> {
  const modal = modalCtrl.create(component, data, opts);
  return new Promise<A>((resolve, reject) => {
    modal.onDidDismiss(text => resolve(text));
    modal.present();
  });
}
