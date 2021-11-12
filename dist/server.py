import http.server
import socketserver
import os

PORT = 8080

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"serving running at http://localhost:{PORT}")
    httpd.serve_forever()