import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  max-width: 700px;
  margin: 0 auto;
  background-color: #fefefe;
  border: 2px solid #e6e6e6;
  border-radius: 12px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: #555;
  font-weight: 300;
`;

export const Input = styled.input`
  margin-bottom: 12px;
  padding: 10px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #fafafa;
`;

export const Select = styled.select`
  margin-bottom: 12px;
  padding: 10px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #fafafa;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  background-color: #f7f7f7;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: #ff6f61;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #ff5c4d;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const TemplateField = styled.textarea`
  margin-bottom: 12px;
  padding: 14px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 6px;
  resize: none;
  height: 150px;
  background-color: #fafafa;
  font-size: 16px;
`;