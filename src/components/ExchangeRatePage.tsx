import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const styles = makeStyles({
  tableContainer: {
    width: '90% !important',
    marginTop: '50px',
  },
  table: {
    width: '100%',
  },
});

interface ExchangeRatePageProps {
  options: any[];
}
const ExchangeRatePage: React.FC<ExchangeRatePageProps> = ({ options }) => {
  const classes = styles();
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow style={{ backgroundColor: '#9c27b0' }}>
              <StyledTableCell>Currency:Euro</StyledTableCell>
              <StyledTableCell align="right">Amount:1</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {options.map((option) => (
              <StyledTableRow key={option}>
                <StyledTableCell component="th" scope="row">
                  {option[0]}
                </StyledTableCell>
                <StyledTableCell align="right">{option[1]}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ExchangeRatePage;
