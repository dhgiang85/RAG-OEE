// RAG v3 test harness — local dev server
// Serves test-harness.html + proxies /api/*, /ready, /healthz to gateway
// Usage: node tools/server.js [port] [gateway-url]
// Default: node tools/server.js 3000 http://localhost:8000

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.argv[2]) || 3000;
const GATEWAY = (process.argv[3] || 'http://localhost:8000').replace(/\/+$/, '');
const HTML_FILE = path.join(__dirname, 'test-harness.html');

const PROXY_PREFIXES = ['/api/', '/ready', '/healthz'];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

function proxyRequest(req, res) {
  const target = new URL(GATEWAY + req.url);
  const opts = {
    hostname: target.hostname,
    port: target.port,
    path: target.pathname + target.search,
    method: req.method,
    headers: { ...req.headers },
  };
  delete opts.headers.host;

  const proxy = http.request(opts, (pres) => {
    res.writeHead(pres.statusCode, pres.headers);
    pres.pipe(res);
  });
  proxy.on('error', (err) => {
    res.writeHead(502);
    res.end(JSON.stringify({ error: { code: 'proxy_error', message: err.message } }));
  });
  req.pipe(proxy);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');

  // Proxy API/health requests to gateway
  if (PROXY_PREFIXES.some(p => url.pathname.startsWith(p))) {
    return proxyRequest(req, res);
  }

  // Serve HTML or static files from tools/
  let filePath = url.pathname === '/' ? '/test-harness.html' : url.pathname;
  filePath = path.join(__dirname, filePath);

  const ext = path.extname(filePath);
  const ct = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': ct });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`RAG v3 Test Harness → http://localhost:${PORT}`);
  console.log(`Proxying /api/*, /ready, /healthz → ${GATEWAY}`);
  console.log(`Press Ctrl+C to stop`);
});
