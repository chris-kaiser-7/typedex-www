import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border: 3px solid #ff8c00;
  border-radius: 10px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: #ff8c00;
  font-weight: 600;
`;

export const Input = styled.input`
  margin-bottom: 12px;
  padding: 10px;
  width: 100%;
  border: 2px solid #ff8c00;
  border-radius: 8px;
  background-color: #ffffff;
`;

export const Select = styled.select`
  margin-bottom: 12px;
  padding: 10px;
  width: 100%;
  border: 2px solid #ff8c00;
  border-radius: 8px;
  background-color: #ffffff;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const Th = styled.th`
  border: 2px solid #ff8c00;
  padding: 10px;
  text-align: left;
  background-color: #ffd700;
`;

export const Td = styled.td`
  border: 2px solid #ff8c00;
  padding: 10px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: #32cd32;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #2eb82e;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const TemplateField = styled.textarea`
  margin-bottom: 12px;
  padding: 16px;
  width: 100%;
  border: 2px solid #ff8c00;
  border-radius: 8px;
  resize: none;
  height: 160px;
  background-color: #ffffff;
  font-size: 16px;
`;