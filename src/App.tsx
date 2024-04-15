import './App.css';
import { Card, CategoryBar, Divider } from '@tremor/react';
import { CardPrice, CryptoData } from './components/CardPrice';
import { Chart } from './components/Chart';
import { PrList } from './components/PrList';
import { TableComponent } from './components/Table';
import AmountList from './components/AmountList';
import { TrackerComponent } from './components/Tracker';
import { useEffect, useState } from 'react';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

type DataState = {
  btcChange: CryptoData | null;
  ethChange: CryptoData | null;
  usdtChange: CryptoData | null;
  xrpChange: CryptoData | null;
};

function App() {
  const [data, setData] = useState<DataState>({
    btcChange: null,
    ethChange: null,
    usdtChange: null,
    xrpChange: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();

      const btcData = jsonData.find((item: CryptoData) => item.id === 'bitcoin');
      const ethData = jsonData.find((item: CryptoData) => item.id === 'ethereum');
      const usdtData = jsonData.find((item: CryptoData) => item.id === 'tether');
      const xrpData = jsonData.find((item: CryptoData) => item.id === 'ripple');

      setData({
        btcChange: btcData || null,
        ethChange: ethData || null,
        usdtChange: usdtData || null,
        xrpChange: xrpData || null,
      });
    };

    fetchData();
  }, []);

  const cryptocurrencies = [
    { title: 'BTC', key: 'btcChange' },
    { title: 'ETH', key: 'ethChange' },
    { title: 'USDT', key: 'usdtChange' },
    { title: 'XRP', key: 'xrpChange' },
  ];

  return (
    <>
      <div className='container mx-auto py-10 px-2 grid gap-4'>
        <div className='grid grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4'>
          {cryptocurrencies.map((crypto) => {
            const changeData = data[crypto.key as keyof DataState];

            if (changeData) {
              return (
                <CardPrice
                  key={crypto.key}
                  title={crypto.title}
                  price_change_percentage_24h={changeData.price_change_percentage_24h}
                  image={changeData.image}
                />
              );
            }

            return null;
          })}
        </div>

        <Divider />

        <div className='flex flex-col xl:flex-row gap-4'>
          <PrList />

          <Card>
            <Chart />
          </Card>
        </div>

        <div className='flex flex-col xl:flex-row gap-4'>
          <Card className="grid xl:max-w-md">
            <TrackerComponent />

            <CategoryBar
              tooltip='Compliance'
              values={[40, 30, 20, 10]}
              colors={['emerald', 'yellow', 'orange', 'rose']}
              markerValue={62}
            />
          </Card>

          <AmountList />
        </div>

        <TableComponent />
      </div>
    </>
  );
}

export default App;
