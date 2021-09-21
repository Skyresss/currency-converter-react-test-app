import { Container, TextField, Typography, Fade } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SelectInput from './SelectInput';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDebounce } from 'use-debounce';

interface ConverterProps {
  options: string[];
}

const styles = makeStyles({
  container: {
    margin: '50px',
    borderRadius: '8px',
    backgroundColor: 'rgb(255, 255, 255)',
    boxShadow: 'rgb(35 55 80 / 30%) 0px 6px 12px',
    height: '500px',
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '40px',
  },
  textField: {
    margin: '8px',
    width: '100% ',
  },
  icon: {
    border: '1px solid rgb(118, 118, 118)',
    borderRadius: '1000000px',
    margin: '18px 10px',
  },
});

const Converter: React.FC<ConverterProps> = ({ options }) => {
  const classes = styles();
  const [firstSelectInput, setFirstSelectInput] = useState('EUR');
  const [secondSelectInput, setSecondSelectInput] = useState('USD');
  const [inputValue, setInputValue] = useState('');
  const [convertedCurrency, setConvertedCurrency] = useState('');
  const [debouncedValue] = useDebounce(inputValue, 500);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (debouncedValue) {
      const convert = async () => {
        setLoading(true);
        const response = await axios.get(
          `https://currency-exchange.p.rapidapi.com/exchange`,
          {
            params: {
              to: secondSelectInput,
              from: firstSelectInput,
            },
            headers: {
              'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
              'x-rapidapi-key':
                'aff4a522b9msh4c14ce7ed9813afp10d09fjsn1c613a6a5e7e',
            },
          }
        );
        setLoading(false);
        setConvertedCurrency(
          (response.data * Number(debouncedValue)).toString()
        );
      };
      convert();
    }
  }, [firstSelectInput, secondSelectInput, debouncedValue]);
  return (
    <Container className={classes.container} maxWidth="lg">
      <div style={{ display: 'flex' }}>
        <div className={classes.textField}>
          <TextField
            style={{ width: '100%' }}
            label="Amount"
            fullWidth={true}
            id="outlined-number"
            type="number"
            color="secondary"
            autoFocus={true}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        </div>
        <SelectInput
          options={options}
          setInputValue={setFirstSelectInput}
          inputValue={firstSelectInput}
          label="From"
        />
        <SwapHorizIcon
          onClick={() => {
            setFirstSelectInput(secondSelectInput);
            setSecondSelectInput(firstSelectInput);
          }}
          className={classes.icon}
          fontSize="large"
        />
        <SelectInput
          options={options}
          setInputValue={setSecondSelectInput}
          inputValue={secondSelectInput}
          label="To"
        />
      </div>
      <div
        style={{
          margin: '24px 0 0 0',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Fade in={!loading}>
          <Typography
            align="left"
            variant="h4"
            style={{ color: 'rgb(92, 102, 123)' }}
          >
            {!loading && `${debouncedValue} ${firstSelectInput}=`}
          </Typography>
        </Fade>
        <Fade in={!loading}>
          <Typography align="left" variant="h2">
            {!loading && `${convertedCurrency} ${secondSelectInput}`}
          </Typography>
        </Fade>
      </div>
    </Container>
  );
};

export default Converter;
