import React, { useState } from 'react';
import styled from 'styled-components';
import { apiAssistant } from '../api/assistants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 500px;
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
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;
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


const AddAssistantScreen = () => {
  const [name, setName] = useState('');
  const [template, setTemplate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const assistant = {
      name,
      template,
    };

    try {
      await apiAssistant.postAssistant(localStorage.getItem("token"), assistant);
      alert('Assistant added successfully!');
      setName('');
      setTemplate('');
    } catch (error) {
      console.error('Error adding assistant:', error);
      alert('Failed to add assistant. Please try again.');
    }
  };

  return (
    <Container>
      <Title>Add Assistant</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Label htmlFor="template">Template</Label>
        <Textarea
          id="template"
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          required
        />

        <Button type="submit">Add Assistant</Button>
      </Form>
    </Container>
  );
};

export default AddAssistantScreen;