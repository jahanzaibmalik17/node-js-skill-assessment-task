const Books = require("../models/books");
const mongoose = require("mongoose");

module.exports.getALL = async (req, res) => {
  try {
    const booksPromise = await Books.find({ isDeleted: false });
    const deletedBooksPromise = Books.find({ isDeleted: true });
    const [books, deletedBooks] = await Promise.all([
      booksPromise,
      deletedBooksPromise,
    ]);
    res.render("main", { books: books, deletedBooks: deletedBooks });
  } catch (error) {
    throw error;
  }
};

module.exports.saveBook = async (req, res) => {
  try {
    req.body.authorID = mongoose.Types.ObjectId();
    const addBooksPromise = await Books.create(req.body);
    const booksPromise = await Books.find({ isDeleted: false });
    const deletedBooksPromise = Books.find({ isDeleted: true });
    const [addBooks, books, deletedBooks] = await Promise.all([
      addBooksPromise,
      booksPromise,
      deletedBooksPromise,
    ]);
    res.render("main", { books: books, deletedBooks: deletedBooks });
  } catch (error) {
    throw error;
  }
};

module.exports.addBook = async (req, res) => {
  try {
    res.render("addBook");
  } catch (error) {
    throw error;
  }
};

module.exports.update = async (req, res) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);
    let updatePromise;
    if (Object.keys(req.body).length > 0) {
      updatePromise = Books.findByIdAndUpdate(id, req.body);
    } else {
      updatePromise = Books.findByIdAndUpdate(id, { isDeleted: true });
    }

    const updatedBooksPromise = Books.find({ isDeleted: false });
    const deletedBooksPromise = Books.find({ isDeleted: true });
    const [update, updatedBooks, deletedBooks] = await Promise.all([
      updatePromise,
      updatedBooksPromise,
      deletedBooksPromise,
    ]);
    res.render("main", { books: updatedBooks, deletedBooks: deletedBooks });
  } catch (error) {
    throw error;
  }
};

module.exports.edit = async (req, res) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);
    const book = await Books.findByIdAndUpdate(id);
    res.render("editBook", { book: book });
  } catch (error) {
    throw error;
  }
};
