import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #333;
  border: 1px solid #444;
  border-radius: 8px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: #fff;
  font-weight: 500;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #444;
  color: #fff;
`;

export const Select = styled.select`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #444;
  color: #fff;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const Th = styled.th`
  border: 1px solid #555;
  padding: 8px;
  text-align: left;
  background-color: #555;
  color: #fff;
`;

export const Td = styled.td`
  border: 1px solid #555;
  padding: 8px;
  color: #fff;
`;

export const Button = styled.button`
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

export const TemplateField = styled.textarea`
  margin-bottom: 10px;
  padding: 12px;
  width: 100%;
  border: 1px solid #555;
  border-radius: 4px;
  resize: none;
  height: 120px;
  background-color: #444;
  color: #fff;
  font-size: 14px;
`;