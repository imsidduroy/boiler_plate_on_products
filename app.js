'use strict'

import Express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
// import bodyParser from 'body-parser'
import helmet from 'helmet'
import Routes from './api/routes'
import { SERVER_CONFIG } from './config'
import startServer from './startServer'

const { BODY_LIMIT, ALLOW_CORS_ORIGIN, ALLOW_CORS_METHODS } = SERVER_CONFIG
const app = new Express()
const corsOptions = {
  origin: ALLOW_CORS_ORIGIN,
  methods: ALLOW_CORS_METHODS
}

dotenv.config()
// Middleware Initializations
app.use(cors(corsOptions))

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: BODY_LIMIT }))
// app.use(bodyParser.urlencoded({ limit: BODY_LIMIT, extended: true }))

app.use(helmet())

const db = process.env['DB']
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Initialize Routes
Routes.init(app)

// Start Server
startServer(app)

// For testing
module.export = app
