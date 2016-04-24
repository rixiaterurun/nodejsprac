"use strict";
var http = require("http");
var Main = (function () {
    function Main() {
    }
    Main.prototype.run = function () {
        var _this = this;
        var server = http.createServer(function (req, res) { return _this.requestHandler(req, res); });
        server.listen("5000");
        console.log('Start listening...');
    };
    Main.prototype.requestHandler = function (request, response) {
        response.end("Hello! Node.js with TypeScript");
    };
    return Main;
}());
new Main().run();
//# sourceMappingURL=index.js.map