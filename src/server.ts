import app from "./app";
import config from "./config/index";

app.listen(config.port, () => {
  console.log(`⚡️[server]: Server listening on port ${config.port}`);
});
