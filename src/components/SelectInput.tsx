import { TextField, MenuItem, Box } from '@mui/material';

interface SelectInputProps {
  options: string[];
  inputValue?: string;
  setInputValue: (arg: string) => void;
  label?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  inputValue,
  setInputValue,
  label,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label={label}
          value={inputValue}
          onChange={handleChange}
          color="secondary"
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
};
export default SelectInput;
