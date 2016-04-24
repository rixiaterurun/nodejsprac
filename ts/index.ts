
import http = require("http");

class Main {

    run(): void {
        var server: http.Server = http.createServer((req, res) => this.requestHandler(req, res));
        server.listen("5000");
        console.log('Start listening...');
    }

    private requestHandler(request, response): void {
        response.end("Hello! Node.js with TypeScript");
    }

}

new Main().run();
