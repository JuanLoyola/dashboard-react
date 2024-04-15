import { Card, List, ListItem } from "@tremor/react";

export default function AmountList() {
    return (
        <>
            <Card>
                <List>
                    <ListItem>
                        <span>Roger Federer</span>
                        <span>10,550</span>
                    </ListItem>

                    <ListItem>
                        <span>Rafel Nadal</span>
                        <span>9,205</span>
                    </ListItem>

                    <ListItem>
                        <span>Novak Djokovic</span>
                        <span>8,310</span>
                    </ListItem>

                    <ListItem>
                        <span>Andy Murray</span>
                        <span>7,030</span>
                    </ListItem>
                </List>
            </Card>

        </>
    )
}
