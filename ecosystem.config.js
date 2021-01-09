module.exports = {
  apps: [
    {
      name: "miapp",
      script: 'node dist/index.js',
      ignore_watch: ["node_modules"]
    }
  ],

  deploy: {
    production: {
      user: 'APP',
      // SAIS IPS
      host: '192.168.2.78',
      key: "~/.ssh/deploy_rsa.pub",
      ref: 'origin/master',
      repo: 'git@github.com:Mozzarth/pm2DeployPrueba.git',
      path: './pruebaMozzarthPm2',
      'pre-deploy-local': 'ls',
      'post-deploy': 'npm i && tsc && pm2 reload ecosystem.config.js',
      'pre-setup': ''
    }
  }
};
