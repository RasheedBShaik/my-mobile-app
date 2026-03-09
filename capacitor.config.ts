import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yourname.app',
  appName: 'my-app',
  webDir: 'out',
  server: {
    url: 'http://192.168.0.5:3000', // Your IP address
    cleartext: true
  }
};

export default config;