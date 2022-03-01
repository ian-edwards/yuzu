#!/usr/bin/env node
import * as http from 'http'
import * as url from 'url'

const hostname = process.env.YUZU_HOSTNAME
const port = process.env.YUZU_PORT

import { helloTools } from './tools.mjs'

http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const seed = query?.seed ?? Math.random();
  helloTools()
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    seed: "workin?"
  }));
}).listen(port, hostname, () => {
    console.log(`yuzu listening http://${hostname}:${port}`);
});