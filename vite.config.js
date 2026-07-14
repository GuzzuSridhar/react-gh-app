import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // base: "/react-gh-app/",
  base: mode === "production" ? "/react-gh-app/" : "/",
}));
