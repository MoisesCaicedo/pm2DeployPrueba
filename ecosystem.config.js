module.exports = {
  apps: [
    {
      name: "prueba",
      script: "npm i && npm run dev",
      env: {}
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
      user: 'APP',
      // SAIS IPS
      host: '181.57.176.142',
      key: "~/.ssh/deploy_rsa.pub",
      ref: 'origin/master',
      repo: 'git@github.com:Mozzarth/pm2DeployPrueba.git',
      path: './pruebaMozzarthPm2',
      'pre-deploy-local': 'ls',
      'post-deploy': 'npm i && npm run dev',
      'pre-setup': ''
    }
  }
};
