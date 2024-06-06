import { connect } from "mongoose";

const connectDB = async () => {
  try {
    // read mongo url from env
    const mongoURL = process.env.MONGO_URL;
    if (mongoURL) {
      // connect ot mongo db
      await connect(mongoURL);
      console.log("Mongo DB connected successfully!")
    }
  } catch (error) {
    console.log("Error: No Mongo URL is provided", error);
    process.exit(1);
  }
};

export default connectDB;
