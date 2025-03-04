module.exports = {
  apps: [{
    name: "node-app",
    script: "server.js",
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: "production",
      PORT: 3000
    }
  }]
};

