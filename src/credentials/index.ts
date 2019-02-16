import * as fs from "fs";
import * as path from "path";

let credentials: string | undefined;
if (!fs.existsSync(path.join(__dirname, "private.json"))) {
  credentials = fs.readFileSync(path.join(__dirname, "private.template.json")).toString();
} else {
  credentials = fs.readFileSync(path.join(__dirname, "private.json")).toString();
}

export default JSON.parse(credentials);
