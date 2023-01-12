import initialBooks from '../data/initial-books.json';

const initialState = {};

initialBooks.forEach(book => initialState[book.id] = book);

export default function booksReducer (state = initialState, action) {
  Object.freeze(state)
  switch (action.type) {
    default:
      return state;
  }
}
