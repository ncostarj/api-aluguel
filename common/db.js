const mongoose = require("mongoose");

module.exports.db = (config) => {

    const dsn = `mongodb://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.database}?authSource=admin`;

    mongoose.connect(dsn, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    mongoose.connection.on("error", e => {
      console.log(e);
    });
    
}