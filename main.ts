import { copyFileSync, mkdirSync } from "node:fs";

// The image is bundled in the repo; the program only copies it verbatim.
mkdirSync("/output", { recursive: true });
copyFileSync("entry.png", "/output/entry.png");
