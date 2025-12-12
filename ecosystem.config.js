module.exports = {
  apps: [
    {
      name: 'blck-ltd',
      script: 'npm',
      args: 'start',
      cwd: '/path/to/your/project', // Замените на путь к проекту на сервере
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
}


