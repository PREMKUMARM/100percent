module.exports = {
  apps : [{
    name: "percent100",
    script: 'dist/server',
    watch: '.',
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    },
    instances  : 4,
    exec_mode  : "cluster"
  }]
};
