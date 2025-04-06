import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Remove the @tailwindcss/vite import

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()], // Remove tailwindcss() from plugins
});
