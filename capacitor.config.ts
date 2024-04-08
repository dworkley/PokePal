import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.pokepal",
  appName: "PokePal",
  webDir: "build",
  server: {
    url: "http://192.168.1.234:3000",
    cleartext: true,
    androidScheme: "https",
  },
};

export default config;
