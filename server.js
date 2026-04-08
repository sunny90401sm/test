import express from "express";
import serveIndex from "serve-index";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const filesPath = path.join(__dirname, "html5up");

app.use("/html5up", express.static(filesPath), serveIndex(filesPath, { icons: true }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
