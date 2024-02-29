import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
    return {
        plugins: [react()],
        resolve: {
            extensions: [
                ".js",
                ".jsx",
                ".ts",
                ".tsx",
                ".json",
                ".css",
                ".scss",
            ],
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
    };
});
