import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
  font-weight: 400;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f7f7f7;
`;

export const Select = styled.select`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f7f7f7;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f0f0f0;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
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
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
  height: 120px;
  background-color: #f7f7f7;
  font-size: 14px;
`;