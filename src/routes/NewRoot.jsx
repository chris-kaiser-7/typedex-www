import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { apiSubtype } from '../api/subtype'; // Assuming you have a function to post a root
import { apiBook } from '../api/book';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
    
const AddRootScreen = () => {
  const [name, setName] = useState('');
  const [book, setBook] = useState('');
  const [properties, setProperties] = useState({});
  const [books, setBooks] = useState([]);
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await apiBook.getAllBooks();
      console.log(booksData)
      setBooks(booksData);
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    if (book) {
      const selectedBook = books.find(b => b.id === book);
      if (selectedBook && selectedBook.fields) {
        setFields(selectedBook.fields);
        setProperties(selectedBook.fields.reduce((acc, field) => {
          acc[field] = '';
          return acc;
        }, {}));
      }
    }
  }, [book, books]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperties((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const root = {
      name,
      book,
      properties,
    };

    try {
      await apiSubtype.postSubtype(localStorage.getItem('token'), root);
      alert('Root added successfully!');
      setName('');
      setBook('');
      setProperties({});
      setFields([]);
    } catch (error) {
      console.error('Error adding root:', error);
      alert('Failed to add root. Please try again.');
    }
  };

  return (
    <Container>
      <Title>Add Root</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Label htmlFor="book">Book</Label>
        <Select
          id="book"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          required
        >
          <option value="">Select a book</option>
          {books.map((b) => (
            <option key={b.id} value={b.name}>
              {b.name}
            </option>
          ))}
        </Select>

        {fields.map((field) => (
          <div key={field}>
            <Label htmlFor={field}>{field}</Label>
            <Input
              id={field}
              name={field}
              type="text"
              value={properties[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <Button type="submit">Add Root</Button>
      </Form>
    </Container>
  );
};

export default AddRootScreen;
