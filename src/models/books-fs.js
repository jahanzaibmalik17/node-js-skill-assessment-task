// How to use
// 1. Use the following object in case you choose server file system as your database
// 2. Books data should be validated with the bookSchema structure below,
//    before performing and read/write action in the database (i.e., file system)

const bookSchema = {
  bookID: {
    type: String, // random unique string
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  page: {
    type: Number,
    required: true,
    trim: true,
    max: 5000
  },
  price: {
    type: Number,
    required: true,
    trim: true,
    max: 9000
  },
  isDeleted: {
    type: Boolean,
    default: false,
    trim: true
  },
  isIssued: {
    type: Boolean,
    default: false,
    trim: true
  }
};

module.exports = bookSchema;
