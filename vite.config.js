import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import dotenv from "dotenv";

export default defineConfig(({ mode }) => {
  dotenv.config({ mode });

  return {
    plugins: [
      react(),
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: "auto",
        devOptions: { enabled: true },
        manifest: {
          name: "chat app",
          short_name: "chat app",
          description: "Stay connected with friends and family or meet new people through dynamic group chats",
          theme_color: "#1a1a1d",
          icons: [
            {
              src: "android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
    server: {
      port: 3001,
    },
  };
});
