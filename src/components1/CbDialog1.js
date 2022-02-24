import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, keyframes, css } from 'styled-components';
import {
  useCbDispatch,
  useCbNextId,
  useCbMode,
  useCbSetMode,
} from '../CbContext1';
import { lighten, darken } from 'polished';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;

const slideDown = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(200px);
    }
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.9);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 370px;
  padding: 1.5rem;
  background-color: #bee3db;
  border-radius: 10px;

  h1 {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    text-align: center;
  }

  h2 {
    margin-top: 0.2em;
    margin-bottom: 0.2em;
  }

  p {
    text-align: center;
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const Result = styled.div`
  width: 300px;
  padding: 1.5rem;
  border-radius: 8px;
  color: #03045e;
  background-color: #bee3db;
  text-align: center;
  text-transform: capitalize;
  margin: 0 auto;

  @media (min-width: 700px) {
    width: 350px;
    height: 70%;
    padding: 1.5rem;
    border-radius: 8px;
    color: #03045e;
    background-color: #bee3db;
    text-align: center;
    text-transform: capitalize;
    margin: 0 auto;
  }
`;

const InsertForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 12px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  font-size: 26px;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    background-color: lightblue;
  }
`;

const Select = styled.select`
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #9b9b9b;
  border-radius: 4px;
  &:focus {
    outline: none;
  }

  @media (min-width: 700px) {
    font-size: 20px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  align-items: center;
  justify-content: center;

  padding: 12px 24px;
  border: none;
  border-radius: 4px;

  font-size: 18px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;

  ${(props) => {
    const selected = props.theme.palette[props.color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
        outline: none;
      }
    `;
  }}

  transition: 0.125s all ease-in;

  & + & {
    margin-left: 10px;
  }
`;

function CbDialog1() {
  const mode = useCbMode();
  const setMode = useCbSetMode();
  const {
    modeName,
    expense: {
      id: modeId,
      type: modeTypeData,
      text: modeTextData,
      price: modePriceData,
      time: modeTimeData,
      date: modeDateData,
    },
  } = mode;
  const uuid = useCbNextId();
  const dispatch = useCbDispatch();
  const [type, setType] = useState(modeTypeData);
  const [text, setText] = useState(modeTextData);
  const [price, setPrice] = useState(modePriceData);
  const [time, setTime] = useState(modeTimeData);
  const [date, setDate] = useState(modeDateData);

  useEffect(() => {
    setType(modeTypeData);
    setText(modeTextData);
    setPrice(modePriceData);
    setTime(modeTimeData);
    setDate(modeDateData);
  }, [mode]);

  const onTypeChange = (e) => setType(e.target.value);
  const onTextChange = (e) => setText(e.target.value);
  const onPriceChange = (e) => setPrice(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE1',
      expense: {
        id: uuid,
        time: time,
        type: type,
        text: text,
        price: price,
        date: date,
      },
    });

    setMode({ ...mode, modeName: 'none' });
  };

  const onRemove = () => {
    dispatch({
      type: 'REMOVE1',
      id: modeId,
    });
    setMode({ ...mode, modeName: 'none' });
  };

  const onCancel = () => {
    setMode({ ...mode, modeName: 'none' });
  };

  let sum = parseInt(price);
  if (modeName === 'none') {
    return null;
  } else if (modeName === 'create') {
    return (
      <>
        <ThemeProvider
          theme={{
            palette: {
              gray: '#484F58',
              blue: '#3A5BDB',
            },
          }}
        >
          <DarkBackground>
            <DialogBlock>
              <h1>Xarajatlarni ro'yxatga olish</h1>
              <InsertForm onSubmit={onSubmit}>
                <h2>Ismi</h2>
                <Input
                  required
                  type="text"
                  value={text}
                  onChange={onTextChange}
                  placeholder="Ism"
                />
                <h2>Summa</h2>
                <Input
                  required
                  type="number"
                  min="0"
                  value={price}
                  onChange={onPriceChange}
                  placeholder="Summa"
                />
                <h2>Turi</h2>
                <Select onChange={onTypeChange} value={type}>
                  <option value="--">Hammasi</option>
                  <option value="Kirim">Kirim</option>
                  <option value="Chiqim">Chiqim</option>
                </Select>
                <ButtonGroup>
                  <Button color="gray" onClick={onCancel}>
                    Bekor qilish
                  </Button>
                  <Button color="blue" type="submit">
                    Ro'yxatga qo'shish
                  </Button>
                </ButtonGroup>
              </InsertForm>
            </DialogBlock>
          </DarkBackground>
        </ThemeProvider>
      </>
    );
  } else if (modeName === 'edit') {
    return (
      <>
        <ThemeProvider
          theme={{
            palette: {
              gray: '#0fe8f7',
              blue: 'blue',
            },
          }}
        >
          <DarkBackground>
            <Result>
              <h1>Ma'lumot</h1>
              <h2>USD Dollar</h2>
              <h2>{type}</h2>
              <h3>
                {date}
                <br />
                {time}
              </h3>
              <h1> {text}</h1>
              <h2>{sum.toLocaleString()} USD</h2>
              <ButtonGroup>
                <Button color="gray" onClick={onCancel}>
                  Orqaga
                </Button>
              </ButtonGroup>
            </Result>
          </DarkBackground>
        </ThemeProvider>
      </>
    );
  } else if (modeName === 'remove') {
    return (
      <>
        <ThemeProvider
          theme={{
            palette: {
              gray: '#0fe8f7',
              pink: 'red',
            },
          }}
        >
          <DarkBackground>
            <DialogBlock>
              <h1> O'chirishni istaysizmi?</h1>
              <ButtonGroup>
                <Button color="gray" onClick={onCancel}>
                  Bekor qilish
                </Button>
                <Button color="pink" onClick={onRemove}>
                  O'chirish
                </Button>
              </ButtonGroup>
            </DialogBlock>
          </DarkBackground>
        </ThemeProvider>
      </>
    );
  }
}

export default CbDialog1;
