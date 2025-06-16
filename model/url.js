import mongoose from "mongoose";

// Define the structure of your documents in the "urls" collection
const urlSchema = new mongoose.Schema({ 
  // Here you put your fields, for example:
  shortId: { type: String, required: true, unique: true },
  redirectURL: { type: String, required: true },
  clicks: { type: Number, default: 0 }
}, { timestamps: true }); // <- this adds createdAt and updatedAt

// Now we create a Model from this Schema
const URL = mongoose.model("URL", urlSchema);

// Export it to use elsewhere
export default URL;
