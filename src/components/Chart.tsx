import { AreaChart } from '@tremor/react';

const chartdata = [
    {
        date: 'Jan 22',
        BTC: 2890,
        ETH: 2338,
    },
    {
        date: 'Feb 22',
        BTC: 2756,
        ETH: 2103,
    },
    {
        date: 'Mar 22',
        BTC: 3322,
        ETH: 2194,
    },
    {
        date: 'Apr 22',
        BTC: 3470,
        ETH: 2108,
    },
    {
        date: 'May 22',
        BTC: 3475,
        ETH: 1812,
    },
    {
        date: 'Jun 22',
        BTC: 3129,
        ETH: 1726,
    },
    {
        date: 'Jul 22',
        BTC: 3490,
        ETH: 1982,
    },
    {
        date: 'Aug 22',
        BTC: 2903,
        ETH: 2012,
    },
    {
        date: 'Sep 22',
        BTC: 2643,
        ETH: 2342,
    },
    {
        date: 'Oct 22',
        BTC: 2837,
        ETH: 2698,
    },
    {
        date: 'Nov 22',
        BTC: 2954,
        ETH: 2718,
    },
    {
        date: 'Dec 22',
        BTC: 3239,
        ETH: 2138,
    },
];

const valueFormatter = function (number: number) {
    return '$ ' + new Intl.NumberFormat('us').format(number).toString();
};

export function Chart() {
    return (
        <div className='grid w-full'>
            <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Newsletter Revenue</h3>
            <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,567</p>

            <AreaChart
                className="mt-4 h-72"
                data={chartdata}
                index="date"
                yAxisWidth={65}
                categories={['BTC', 'ETH']}
                colors={['yellow', 'indigo']}
                valueFormatter={valueFormatter}
            />
        </div>
    );
}