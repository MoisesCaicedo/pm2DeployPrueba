module.exports = {
  apps: [
    {
      name: "prueba",
      script: "npm i && npm run dev",
      env: { algo: 1 }
    },
    {
      name: "prueba2",
      script: "npm i && npm run dev",
      env: {
        NODE_PORT: 3020
      }
    }
  ],

  deploy: {
    production: {
      // SAIS IPS
      user: 'APP',
      host: '181.57.176.142',
      key: "~/.ssh/id_rsa",
      ref: 'origin/master',
      repo: 'git@github.com:Mozzarth/pm2DeployPrueba.git',
      path: './',
      "ssh_options": ["PasswordAuthentication=no"],
      'pre-setup': 'echo este es un Hola de mi maquina local',
      'pre-deploy-local': 'ls',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
