import {
  createBook,
  deleteBook,
  fetchBook,
  getBookById,
  patchBook,
} from "../controllers/book.js";
import express from "express";

const router = express.Router();

router.get("/", fetchBook);

router.get("/:id", getBookById);

// Update a book by ID
router.patch("/:id", patchBook);

// Delete a book by ID
router.delete("/:id", deleteBook);

// Create a new book
router.post("/", createBook);

export default router;
