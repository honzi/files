#!/usr/bin/env python3

import http.server
import os
import socketserver
import sys

def init_webserver(host = '127.0.0.1', port = 8000, root = 'root'):
    os.chdir(root)
    webserver = socketserver.TCPServer((host, port), http.server.SimpleHTTPRequestHandler)
    print('WebServer.py initialized at http://' + host + ':' + str(port) + ' root=' + root)
    webserver.serve_forever()

if __name__ == '__main__':
    init_webserver(
      '127.0.0.1' if len(sys.argv) < 2 else sys.argv[1],
      8000 if len(sys.argv) < 3 else sys.argv[2],
      'root' if len(sys.argv) < 4 else sys.argv[3]
    )
