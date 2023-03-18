import 'reflect-metadata';
import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

import './../database/config/database.bootstrap';
import "../providers"

import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);


export { app };
