import express from "express";
import prerenderMiddleware from "prerender-node";
import prerender from "prerender";

const app = express();
const prerenderPort = 3001;
const server = prerender({ port: prerenderPort });

prerenderMiddleware.prerenderServiceUrl = `http://localhost:${prerenderPort}`;

app.use(prerenderMiddleware);

app.use(express.static("./public"));

async function main(): Promise<void> {
  console.log("poyo");

  server.start();
  const port = 3000;

  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
}

main();

process.on("unhandledRejection", (reason) => {
  console.error(reason);
  process.exit(1);
});
