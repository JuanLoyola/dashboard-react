import { Card } from '@tremor/react';

export type CryptoData = {
    title: string
    price_change_percentage_24h: number;
    image?: string;
    id?: string
}

export function CardPrice({ title, price_change_percentage_24h, image }: CryptoData) {
    return (
        <Card
            className="flex gap-x-4 items-center justify-center"
            decoration="top"
            decorationColor={title == 'BTC' ? 'yellow' : 'indigo'}
        >
            <img className='h-12 w-12 rounded-full' src={image} alt={title} />

            <span className="grid">
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">{title}</p>

                <p className={`xl:text-3xl font-semibold ${price_change_percentage_24h > 0 ? 'text-green-500' : price_change_percentage_24h < 0 ? 'text-red-500' : 'text-tremor-content-strong dark:text-dark-tremor-content-strong'}`}>
                    {price_change_percentage_24h}%
                </p>
            </span>
        </Card>
    );
}
