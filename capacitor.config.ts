import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'TabApp',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#ffffffff',
    allowMixedContent: true,
    captureInput: false,
    webContentsDebuggingEnabled: true
  },

};


export default config;
