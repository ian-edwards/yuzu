#!/usr/bin/env node
import express from 'express'

const app = express();
const hostname = process.env.YUZU_HOSTNAME
const port = process.env.YUZU_PORT

app.get('/yuzu', (req, res) => {
  res.send('hello yuzu')
})

app.listen(port, hostname, () => {
  console.log(`yuzu listening http://${hostname}:${port}/yuzu`)
})