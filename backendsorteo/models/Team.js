import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  confederation: {
    type: String,
    required: true,
    enum: ["UEFA", "CONMEBOL", "CONCACAF", "AFC", "CAF", "OFC"]
  },
  ranking: {
    type: Number,
    required: false
  }
});

export default mongoose.model("Team", teamSchema);