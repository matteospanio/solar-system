import http.server
import socketserver
import os

PORT = 8080

dist_dir = os.path.join(os.path.dirname(__file__), 'dist')
os.chdir(dist_dir)

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"serving running at http://localhost:{PORT}")
    httpd.serve_forever()