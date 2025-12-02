module.exports = {
  apps: [
    {
      name: "jejinni-client",
      script: "pnpm",
      args: "start -- -H 0.0.0.0",
      cwd: "/home/jinni/jejinni-client",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
    {
      name: "jejinni-client-staging",
      script: "pnpm",
      args: "start -- -H 0.0.0.0",
      cwd: "/home/jinni/jejinni-client-staging",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 3001,
      },
    },
  ],
};
