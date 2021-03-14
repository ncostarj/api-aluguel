import mongoose from 'mongoose';

export const connect = () => {
  const uri = 'mongodb://root:root@localhost:27018/api-aluguel?authSource=admin';

  mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });

  // mongoose.connection.once("open", async () => {
  //   console.log(uri);
  //   console.log('Database connected');
  // });

  mongoose.connection.on("error", (e) => {
    console.log(`Error connecting on db ${e.message}`);
  });
}

export const disconnect = () => {
  mongoose.connection.close();
}