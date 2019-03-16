/**
 * for the sake of type check on the param
 * */

import { NavController, NavOptions, NavParams } from 'ionic-angular';
import { Type } from '@beenotung/tslib/lang';
import { Component } from '@angular/core';
import { TransitionDoneFn } from 'ionic-angular/navigation/nav-util';

export interface ParabledPage<IParam> extends Component {
  paramData: IParam;
}

export function navPushPage<IParam>(
  navCtrl: NavController,
  page: Type<ParabledPage<IParam>>,
  param?: IParam,
  opts?: NavOptions,
  done?: TransitionDoneFn,
): Promise<any> {
  return navCtrl.push(page, param, opts, done);
}

export declare class TypedNavParams<A> extends NavParams {
  data: A;

  get<B>(param: string): B;
}

export function typedNavParams<A>(navParams: NavParams): TypedNavParams<A> {
  return navParams;
}
