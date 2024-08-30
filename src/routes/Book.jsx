import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Container, Title, Input, Select, Table, Th, Td, Button, TemplateField } from '../styles/book_5';

// // Styled Components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   max-width: 600px;
//   margin: 0 auto;
// `;

// const Title = styled.h2`
//   margin-bottom: 20px;
// `;

// const Input = styled.input`
//   margin-bottom: 10px;
//   padding: 8px;
//   width: 100%;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Select = styled.select`
//   margin-bottom: 10px;
//   padding: 8px;
//   width: 100%;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   margin-bottom: 20px;
// `;

// const Th = styled.th`
//   border: 1px solid #ddd;
//   padding: 8px;
//   text-align: left;
//   background-color: #f2f2f2;
// `;

// const Td = styled.td`
//   border: 1px solid #ddd;
//   padding: 8px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   &:hover {
//     background-color: #0056b3;
//   }
//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }
// `;

const AddButton = styled(Button)`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%
`;

const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

const Paragraph = styled.p`
  margin: 0 0 10px;
  font-size: 14px;
`;


// const TemplateField = styled.textarea`
//   margin-bottom: 10px;
//   padding: 8px;
//   width: 100%;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   resize: none;
//   height: 80px;
//   background-color: #f9f9f9;
// `;

const BookForm = () => {
  const [name, setName] = useState('');
  const [fields, setFields] = useState(['']);
  const [fieldDescriptions, setFieldDescriptions] = useState(['']);
  const [assistants, setAssistants] = useState([]);
  const [selectedAssistant, setSelectedAssistant] = useState('');
  const [assistantTemplate, setAssistantTemplate] = useState('');

  useEffect(() => {
    const fetchAssistants = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/assistants');
        setAssistants(response.data);
      } catch (error) {
        console.error('Error fetching assistants:', error);
      }
    };
    
    fetchAssistants();
  }, []);

  const handleAssistantChange = (e) => {
    const assistantId = e.target.value;
    setSelectedAssistant(assistantId);
    const assistant = assistants.find(a => a.name === assistantId);
    console.log(assistant)
    if (assistant) {
      console.log("yes")
      setAssistantTemplate(assistant.template);
    }
  };

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
      assistant: selectedAssistant,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/books', data);
      console.log('Book posted successfully:', response.data);
      // Reset form
      setName('');
      setFields(['']);
      setFieldDescriptions(['']);
      setSelectedAssistant('');
      setAssistantTemplate('');
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
      <Select
        value={selectedAssistant}
        onChange={handleAssistantChange}
      >
        <option value="">Select an Assistant</option>
        {assistants.map(assistant => (
          <option key={assistant.name} value={assistant.name}>
            {assistant.name}
          </option>
        ))}
      </Select>
      {assistantTemplate && (
        <TemplateField>
          {assistantTemplate.split('\n').map((text, index) => (
            <Paragraph key={index}>{text}</Paragraph>
          ))}
        </TemplateField>
      )}
      <SubmitButton onClick={handleSubmit} disabled={!name || !selectedAssistant}>
        Submit
      </SubmitButton>
    </Container>
  );
};

export default BookForm;
