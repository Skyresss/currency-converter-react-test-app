import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  header: {
    height: '50px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: ' 0 25px',
  },
  links: {
    textDecoration: 'none',
    color: 'white',
    padding: ' 0 200px',
  },
});

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar color="secondary" position="sticky">
      <Toolbar className={classes.header}>
        <Link className={classes.links} to="/">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Converter
          </Typography>
        </Link>
        <Link className={classes.links} to="/exchange-rates">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Exchange Rates
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
