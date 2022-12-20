const config = {
  rootDir: ".",
  testMatch: ["<rootDir>/**/?(*.)(spec).{js,jsx,ts,tsx}"],
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "tsx", "json", "node"],
  verbose: true,
  testEnvironment: "jsdom",
};

module.exports = config;
