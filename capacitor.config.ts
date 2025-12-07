
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kodik.app',
  appName: 'KODIK',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
