import { RiEthLine, RiBtcLine } from '@remixicon/react';
import { Card } from '@tremor/react';

type CardPriceProps = {
    title: string;
    amount: number;
    img: 'btc' | 'eth'
}

const iconMapping = {
    btc: RiBtcLine,
    eth: RiEthLine,
};

export function CardPrice({ title, amount, img }: CardPriceProps) {
    const IconComponent = iconMapping[img];

    return (
        <Card
            className="flex gap-x-4 items-center justify-center"
            decoration="top"
            decorationColor={title == 'BTC' ? 'yellow' : 'indigo'}
        >
            {IconComponent && <IconComponent className="text-white" size={60} />}

            <span className="grid">
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">{title}</p>

                <p className={`xl:text-3xl font-semibold ${amount > 0 ? 'text-green-500' : amount < 0 ? 'text-red-500' : 'text-tremor-content-strong dark:text-dark-tremor-content-strong'}`}>
                    ${amount}
                </p>
            </span>
        </Card>
    );
}
