const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    console.log("🌐 Connecting to MongoDB...");
    console.log("🔑 MONGO_URL =", process.env.MONGO_URL);

    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });

    console.log("✅ MongoDB connected!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:");
    console.error(err.message);  // log short message
    console.error(err);          // full error for detail
    process.exit(1);
  }
};

module.exports = connectDb;
