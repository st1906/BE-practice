module.exports = {
   type: "postgres",
   host: "localhost",
   port: 5432,
   username: "user",
   password: "pass",
   database: "db",
   synchronize: false,
   logging: false,
   entities: [
      __dirname + (process.env.NODE_ENV==='prod' ? "/dist" : "/src") + "/entity/**/*{.js,.ts}" ,
   ],
   migrations: [
      __dirname + "/src/migration/**/*.js"
   ],
   cli: {
      entitiesDir: ["/src/entity"],
      migrationsDir: ["/src/migration"],
   }
}