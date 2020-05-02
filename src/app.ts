import express from "express";
import prerender from "prerender-node";

const app = express();

app.use(prerender);

app.get("/", (_, res) => {
  res.send("poyo");
});

async function main(): Promise<void> {
  console.log("poyo");

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
