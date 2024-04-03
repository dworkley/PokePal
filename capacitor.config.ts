import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pokepal',
  appName: 'PokePal',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
