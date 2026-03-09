import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yourname.app',
  appName: 'my-app',
  webDir: 'out', 
  server: {
    androidScheme: 'https',
    hostname: 'localhost',
  },
  // ... rest of your plugins
};

export default config;