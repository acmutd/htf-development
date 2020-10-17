import * as functions from 'firebase-functions';
import { Request, Response } from "express";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors({ origin: true }));
functions.logger.info("Starting Application");

// example function that returns hello world
app.get("/hello", (request: Request, response: Response) => {
    response.json({
        message: "hello world!"
    });
});

/* Change things below this line */

// import functions
import { hello_first, first_last } from "./api/template";

// add your import in addition to the ones above
import { hello_brian, brian_lam } from "./api/brian"

app.get("/first-last", first_last);
app.get("/hello-first-last/:name", hello_first);

// add your endpoint in addition to the default one
app.get("/hello-brian-lam/:name", hello_brian);
app.get("/brian-lam", brian_lam);

/* Change things above this line */

//the line of code below will deploy to firebase cloud functions instead of running locally
//leave this line commented
//export const api = functions.https.onRequest(app);

//the line of code below will run this locally
app.listen(8079);
