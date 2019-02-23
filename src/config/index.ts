import fs from "fs";
import path from "path";

const readCredentials = (credentialsFileName, fallbackFileName) => {
  if (!fs.existsSync(path.join(__dirname, credentialsFileName))) {
    return fs.readFileSync(path.join(__dirname, fallbackFileName)).toString();
  }
  return fs.readFileSync(path.join(__dirname, credentialsFileName)).toString();
};

const credentials = JSON.parse(readCredentials("credentials.json", "credentials.template.json"));
export { credentials };
