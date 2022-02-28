#!/usr/bin/env node
import * as http from 'http'
import * as url from 'url'

import { helloTools } from './tools.mjs'

http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const seed = query?.seed ?? Math.random();
  helloTools()
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    seed: seed
  }));
}).listen(process.env.YUZU_PORT, process.env.YUZU_HOSTNAME, () => {
    console.log(`yuzu listening port:${process.env.YUZU_PORT} hostname:${process.env.YUZU_HOSTNAME}...`);
});