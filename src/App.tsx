import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Converter from './components/ConverterPage';
import ExchangeRatePage from './components/ExchangeRatePage';
import Header from './components/Header';

const App: React.FC = () => {
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([
    'USD',
    'EUR',
  ]);
  const [currencyOptionsAndRates, setCurrencyOptionsAndRates] = useState<any[]>(
    [
      ['USD', 1.2],
      ['EUR', 1],
    ]
  );
  useEffect(() => {
    // const test = async () => {
    //   const go = await axios.get('http://api.exchangeratesapi.io/v1/latest', {
    //     params: {
    //       access_key: '89205d0fbff149ecb3265084601733c6',
    //       symbols:
    //         'SGD,MYR,EUR,USD,AUD,JPY,CNH,HKD,CAD,INR,DKK,GBP,RUB,NZD,MXN,IDR,TWD,THB,VND',
    //     },
    //   });
    //   console.log(Object.keys(go.data.rates));
    //   setCurrencyOptions(Object.keys(go.data.rates));
    //   setCurrencyOptionsAndRates(Object.entries(go.data.rates));
    // };
    // test();
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
