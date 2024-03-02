module.exports = {
  apps : [
    {
      name: "my-app",
      script: "node ./src/index.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        MONGO_URI: "mongodb+srv://toufique:googleauth@cluster0.gzz695w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        PORT:"3000",
        SESSION_KEY: "5a8e76e0ce05d413c3815c41afe99c96ca0c753342d424507ad9c7003a54ac62",
        GOOGLE_CLIENT_ID: "128332370506-pjftc119ii4qba59qm628sdjclv2osoh.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET: "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",
        GOOGLE_REDIRECT_URL: "http://localhost:3000/auth/google/callback"
      },
      env_production: {
        NODE_ENV: "production",
        MONGO_URI: "mongodb+srv://toufique:googleauth@cluster0.gzz695w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        PORT:"3000",
        SESSION_KEY: "5a8e76e0ce05d413c3815c41afe99c96ca0c753342d424507ad9c7003a54ac62",
        GOOGLE_CLIENT_ID: "128332370506-pjftc119ii4qba59qm628sdjclv2osoh.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET: "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",
        GOOGLE_REDIRECT_URL: "http://localhost:3000/auth/google/callback"
      }
    }
  ]
}