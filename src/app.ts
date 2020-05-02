import express from "express";

const app = express();

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
