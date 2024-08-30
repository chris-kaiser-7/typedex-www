import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 10px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: #343a40;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #adb5bd;
  border-radius: 4px;
  background-color: #ffffff;
  box-sizing: border-box; /* Ensures that padding is included in the width calculation */
`;

export const Select = styled.select`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border: 1px solid #adb5bd;
  border-radius: 4px;
  background-color: #ffffff;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Th = styled.th`
  border: 1px solid #adb5bd;
  padding: 10px;
  text-align: left;
  background-color: #dee2e6;
`;

export const Td = styled.td`
  border: 1px solid #adb5bd;
  padding: 5px;
`;

export const Button = styled.button`
  padding: 12px 20px;
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

export const TemplateField = styled.div`
  margin-bottom: 10px;
  padding: 12px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #e9ecef;
  height: 120px;
  overflow-y: auto; /* Scroll if content is too long */
  box-sizing: border-box; /* Ensures that padding is included in the width calculation */
`;