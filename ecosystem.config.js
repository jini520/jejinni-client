module.exports = {
  apps: [
    {
      name: "jejinni-client",
      script: "pnpm",
      args: "start",
      cwd: "/home/ubuntu/jejinni-client",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
