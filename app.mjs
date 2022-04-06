#!/usr/bin/env node
import express from 'express'

const app = express();
const hostname = process.env.YUZU_HOSTNAME
const port = process.env.YUZU_PORT

app.get('/yuzu', (req, res) => {
  res.sendStatus(200); // OK
})

app.post('/yuzu', (req, res) => {
  res.send('post');
})

app.listen(port, hostname, () => {
  console.log(`yuzu listening http://${hostname}:${port}/yuzu`)
})