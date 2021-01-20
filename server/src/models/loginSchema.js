const mongoose = require("mongoose");

/*
 * - Title - Text
 * - Description - Text
 * - Comment - Text
 * - Rating - Text
 * - Image - Text - URL
 * - Longitude - number
 * - Latitude - number
 * - Created At - DateTime
 * - Updated At - DateTime
 */

const requiredNumber = {
  type: Number,
  required: true,
};

const logEntrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    comments: String,
    image: String,
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    latitude: { ...requiredNumber, min: -90, max: 90 },
    longitude: { ...requiredNumber, min: -180, max: 180 },
    visitedDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("logEntry", logEntrySchema);
