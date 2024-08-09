const NodeContent1 = styled.div`
  border: 2px dashed #ffcc00;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff8e7;
  width: 250px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff4db;
  }

  h3 {
    font-size: 1.15em;
    margin-bottom: 12px;
    color: #aa5500;
    text-transform: uppercase;
  }

  p {
    font-size: 0.9em;
    color: #774400;
  }

  button {
    background-color: #ffaa33;
    color: #332200;
    border: none;
    padding: 7px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9em;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff9933;
    }

    &:disabled {
      background-color: #ffcc99;
    }
  }
`;

const NodeContent2 = styled.div`
  border: 1px solid #333;
  padding: 16px;
  border-radius: 10px;
  background-color: #222;
  width: 220px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #e0e0e0;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  h3 {
    font-size: 1.1em;
    margin-bottom: 10px;
    color: #e0e0e0;
  }

  p {
    font-size: 0.8em;
    color: #bbb;
  }

  button {
    background-color: #ff6347;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.85em;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ee5a36;
    }

    &:disabled {
      background-color: #444;
    }
  }
`;

const NodeContent3 = styled.div`
  border: 1px solid transparent;
  padding: 18px;
  border-radius: 12px;
  background-image: linear-gradient(145deg, #f0f8ff, #e6f2ff);
  width: 230px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 0.85em;
    color: #555;
  }

  button {
    background-color: #ff7f50;
    color: white;
    border: none;
    padding: 8px 14px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 0.9em;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e0674f;
    }

    &:disabled {
      background-color: #cccccc;
    }
  }
`;


const NodeContent4 = styled.div`
  border: none;
  padding: 25px;
  border-radius: 20px;
  background-color: #fefefe;
  width: 260px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    font-size: 1.3em;
    margin-bottom: 14px;
    color: #1a1a1a;
  }

  p {
    font-size: 0.9em;
    color: #444;
    margin-bottom: 20px;
  }

  button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 9px 13px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9em;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #218838;
    }

    &:disabled {
      background-color: #cccccc;
    }
  }
`;


const NodeContent5 = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 15px;
  background-color: #ffffff;
  width: 240px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.4em;
    margin-bottom: 12px;
    color: #222;
    font-weight: 600;
  }

  p {
    font-size: 0.95em;
    color: #555;
    line-height: 1.5;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }

    &:disabled {
      background-color: #cccccc;
    }
  }
`;

const NodeContent6 = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 12px;
  background-color: #f9f9f9;
  width: 220px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 0.9em;
    color: #666;
    margin-bottom: 15px;
  }

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9em;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;