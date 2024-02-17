import { createServer } from "http";
import WebSocket, { WebSocketServer } from "ws";

const host = "0.0.0.0";
const port = 8172;

const wss = new WebSocketServer({ port: 1350 });

wss.on("connection", function connection(ws) {
    ws.on("error", console.error);

    ws.on("message", function message(data) {
        console.log("received: %s", data);
    });
});

function handleUpdate(update) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(
                JSON.stringify({
                    type: "gamestate:update",
                    data: update,
                })
            );
        }
    });
}

const server = createServer(function (req, res) {
    if (req.method == "POST") {
        res.writeHead(200, { "Content-Type": "text/html" });

        let body = "";
        req.on("data", function (data) {
            body += data;
        });
        req.on("end", function () {
            handleUpdate(JSON.parse(body));
            res.end("");
        });
    } else {
        // log("Not expecting other request types...");
        res.writeHead(200, { "Content-Type": "text/html" });
        let html = "<html><body>HTTP Server at http://" + host + ":" + port + "</body></html>";
        res.end(html);
    }
});

server.listen(port, host);

console.log("GSI Listener running on port " + port);
console.log("WebSocket Server running on port " + 1350);
console.log("Backend started.");
