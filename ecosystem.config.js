module.exports = {
  apps: [
    {
      name: "jinni-client",
      script: "pnpm",
      args: "start",
      cwd: "/home/jinni/jinni-client",
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
