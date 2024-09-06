const http = require("http");

const servers = [
  { hostname: "host.docker.internal", port: 45781 }, // Server 1
  { hostname: "host.docker.internal", port: 36133 }, // Server 2
];

let currentServerIndex = 0;

const sendRequest = () => {
  const server = servers[currentServerIndex];

  const options = {
    hostname: server.hostname,
    port: server.port,
    path: "/?message=Hi",
    method: "GET",
  };

  const req = http.request(options, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      console.log(`Response from ${server.hostname}:${server.port} - ${data}`);
    });
  });

  req.on("error", (e) => {
    console.error(`Problem with request: ${e.message}`);
  });

  req.end();

  // Move to the next server in round-robin fashion
  currentServerIndex = (currentServerIndex + 1) % servers.length;
};

// Send requests every 1 second
setInterval(sendRequest, 1000);
