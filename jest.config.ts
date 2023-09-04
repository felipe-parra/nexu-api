import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/**/*.test.ts"], // Patrón para buscar archivos de prueba TypeScript
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json", // Ruta al archivo tsconfig.json
    },
  },
};

export default config;
