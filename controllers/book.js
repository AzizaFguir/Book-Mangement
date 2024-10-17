import Book from "../models/book.js";

export const fetchBook = async (req, res) => {
  const books = await Book.find({ duration: 20 });
  res.status(200).json({ model: books, message: "success" });
};
export const createBook = async (req, res) => {
  console.log("id:", req.params.id);

  const book = new Book(req.body);

  const savedBook = await book.save();

  res
    .status(201)
    .json({ model: savedBook, message: "Book created successfully" });
};
export const deleteBook = async (req, res) => {
  console.log("id:", req.params.id);

  const result = await Book.deleteOne({ _id: req.params.id });

  res.status(200).json({ message: "Book deleted successfully" });
};
export const patchBook = async (req, res) => {
  console.log("id :", req.params.id);
  console.log("body :", req.body);
  const task = await Book.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  });
  res.status(200).json({ model: task, message: "success" });
};
export const getBookById = async (req, res, next) => {
  const book = await Book.findOne({ _id: req.params.id });

  res.status(200).json({ model: book, message: "success" });
};
