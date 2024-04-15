import './App.css'
import { Card, CategoryBar, Divider } from '@tremor/react'
import { CardPrice } from './components/CardPrice'
import { Chart } from './components/Chart'
import { PrList } from './components/PrList'
import { TableComponent } from './components/Table'
import AmountList from './components/AmountList'
import { TrackerComponent } from './components/Tracker'

function App() {

  return (
    <>
      <div className='container mx-auto py-10 px-2 grid gap-4'>
        <div className='flex justify-start items-start gap-x-2'>
          <CardPrice title='BTC' amount={3.145} img='btc' />
          <CardPrice title='ETH' amount={-127.58} img='eth' />
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
  )
}

export default App
