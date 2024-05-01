import express from "express";
import { createMiddleware } from "@mswjs/http-middleware";
import { handler } from "./handler";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(createMiddleware(...handler));

app.listen(PORT, () => console.log(`Mock server is running on port: ${PORT}`));
