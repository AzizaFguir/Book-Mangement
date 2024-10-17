import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Number,
    required: false, // L'année de publication est facultative
  },
  genre: {
    type: String,
    required: false, // Le genre est facultatif
  },
  price: {
    type: Number,
    required: true, // Le prix est obligatoire
  },
  inStock: {
    type: Boolean,
    default: true, // En stock par défaut
  },
  createdAt: {
    type: Date,
    default: Date.now, // Date de création par défaut
  },
});
export default mongoose.model("book", BookSchema);
