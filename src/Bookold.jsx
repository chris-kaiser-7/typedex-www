import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const AddButton = styled(Button)`
  margin-top: 10px;
`;

const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

const BookForm = () => {
  const [name, setName] = useState('');
  const [fields, setFields] = useState(['']);
  const [fieldDescriptions, setFieldDescriptions] = useState(['']);
  const [assistant, setAssistant] = useState('');

  const addRow = () => {
    setFields([...fields, '']);
    setFieldDescriptions([...fieldDescriptions, '']);
  };

  const handleFieldChange = (index, value) => {
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
  };

  const handleFieldDescriptionChange = (index, value) => {
    const newFieldDescriptions = [...fieldDescriptions];
    newFieldDescriptions[index] = value;
    setFieldDescriptions(newFieldDescriptions);
  };

  const handleSubmit = async () => {
    const data = {
      name,
      fields,
      field_descriptions: fieldDescriptions,
      assistant,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/books', data);
      console.log('Book posted successfully:', response.data);
      // Reset form
      setName('');
      setFields(['']);
      setFieldDescriptions(['']);
      setAssistant('');
    } catch (error) {
      console.error('Error posting book:', error);
    }
  };

  return (
    <Container>
      <Title>Add New Book</Title>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Table>
        <thead>
          <tr>
            <Th>Field</Th>
            <Th>Field Description</Th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={index}>
              <Td>
                <Input
                  type="text"
                  value={field}
                  onChange={(e) => handleFieldChange(index, e.target.value)}
                />
              </Td>
              <Td>
                <Input
                  type="text"
                  value={fieldDescriptions[index]}
                  onChange={(e) =>
                    handleFieldDescriptionChange(index, e.target.value)
                  }
                />
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AddButton onClick={addRow}>Add Row</AddButton>
      <Input
        type="text"
        placeholder="Assistant"
        value={assistant}
        onChange={(e) => setAssistant(e.target.value)}
      />
      <SubmitButton onClick={handleSubmit} disabled={!name || !assistant}>
        Submit
      </SubmitButton>
    </Container>
  );
};

export default BookForm;
