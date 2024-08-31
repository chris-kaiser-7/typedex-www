import React, { useState, useEffect } from 'react';
import {apiBook } from '../api/book';

const BooksScreen = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    name: '',
    fields: '',
    field_descriptions: '',
    assistant: '',
  });

//   console.log(books)
  // Fetch books on component mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await apiBook.getAllBooks();
        setBooks(response.data);
      } catch (error) {
        console.error("Failed to fetch books", error);
      }
    };
    fetchBooks();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  // Validate fields to ensure no spaces
  const validateFields = () => {
    const fieldsArray = newBook.fields.split(',');
    return fieldsArray.every(field => !/\s/.test(field));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) {
      alert("Fields cannot contain spaces!");
      return;
    }

    const postData = {
      name: newBook.name,
      fields: newBook.fields.split(','),
      field_descriptions: newBook.field_descriptions.split(','),
      assistant: newBook.assistant,
    };

    try {
      await apiBook.postBook(postData);
      alert("Book added successfully!");
      setNewBook({
        name: '',
        fields: '',
        field_descriptions: '',
        assistant: '',
      });
    } catch (error) {
      console.error("Failed to add book", error);
    }
  };

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.name}>
            <strong>{book.name}</strong>: {book.instructions}
          </li>
        ))}
      </ul>

      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Book Name"
          value={newBook.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="fields"
          placeholder="Fields (comma-separated)"
          value={newBook.fields}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="field_descriptions"
          placeholder="Field Descriptions (comma-separated)"
          value={newBook.field_descriptions}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="assistant"
          placeholder="Assistant"
          value={newBook.assistant}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BooksScreen;
