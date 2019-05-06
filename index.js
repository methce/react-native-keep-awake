// @flow

import React, { Component } from 'react';
import { NativeModules } from 'react-native';

let mounted = 0;

export default class KeepAwake extends Component<{}> {
  static keepON() {
    NativeModules.KCKeepAwake.keepON();
  }

  static unkeepON() {
    NativeModules.KCKeepAwake.unkeepON();
  }

  static keepOFF() {
    NativeModules.KCKeepAwake.keepOFF();
  }

  static unkeepOFF() {
    NativeModules.KCKeepAwake.unkeepOFF();
  }

  componentDidMount() {
    mounted++;
    KeepAwake.keepON();
    KeepAwake.keepOFF();
  }

  componentWillUnmount() {
    mounted--;
    if (!mounted) {
      KeepAwake.unkeepON();
      KeepAwake.unkeepOFF();
    }
  }

  render() {
    return null;
  }
}
