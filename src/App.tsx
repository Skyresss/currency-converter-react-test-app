import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Converter from './components/ConverterPage';
import ExchangeRatePage from './components/ExchangeRatePage';
import Header from './components/Header';

const App: React.FC = () => {
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [currencyOptionsAndRates, setCurrencyOptionsAndRates] = useState<any[]>(
    []
  );
  useEffect(() => {
    const test = async () => {
      const go = await axios.get('https://api.exchangeratesapi.io/v1/latest', {
        params: {
          access_key: 'f55e4bbb2e9ab101148944e14d48baef',
          symbols:
            'SGD,MYR,EUR,USD,AUD,JPY,CNH,HKD,CAD,INR,DKK,GBP,RUB,NZD,MXN,IDR,TWD,THB,VND',
        },
      });
      setCurrencyOptions(Object.keys(go.data.rates));
      setCurrencyOptionsAndRates(Object.entries(go.data.rates));
    };
    test();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Converter options={currencyOptions} />
        </Route>
        <Route path="/exchange-rates" exact>
          <Header />
          <ExchangeRatePage options={currencyOptionsAndRates} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
