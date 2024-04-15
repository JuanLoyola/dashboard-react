import { useState } from 'react'
import { Badge, Button, Card, Dialog, DialogPanel, List, ListItem, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { RiArrowLeftLine, RiFlag2Line } from '@remixicon/react';

export function PrList() {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState<User>()

    type User = {
        user: string;
        request: string;
        id?: number
        status: string
    }

    const users = [
        {
            user: 'Peter',
            fullname: 'Peter Alfonso',
            request: '4 open PR',
            id: 146,
            status: 'active'
        },
        {
            user: 'Juan',
            fullname: 'Juan Loyola',
            request: '1 open PR',
            id: 258,
            status: 'active'
        },
        {
            user: 'Parker',
            fullname: 'Parker Dominic',
            request: '0 open PR',
            id: 324,
            status: 'complete'
        },
        {
            user: 'Bruno',
            fullname: 'Bruno Mars',
            request: '1 open PR',
            id: 411,
            status: 'active'
        },
        {
            user: 'Leslie',
            fullname: 'Leslie Losli',
            request: '0 open PR',
            id: 53,
            status: 'complete'
        },
    ];


    function toUserPorfile(user: User) {
        setUser(user)
        setIsOpen(true)
    }

    return (
        <>

            <Card className="mx-auto max-w-md">
                <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Tremor's Hometowns</h3>

                <List className="mt-2">
                    {users.map((item) => (
                        <ListItem key={item.user}>
                            ({item.id})
                            <span
                                className='underline text-indigo-300 cursor-pointer'
                                onClick={() => toUserPorfile(item)}
                            >
                                {item.user}
                            </span>

                            <span>{item.request}</span>
                        </ListItem>
                    ))}
                </List>
            </Card>

            <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
                <DialogPanel>
                    <h3 className="text-base font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong mb-4">Info from {user?.user}</h3>

                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell>ID</TableHeaderCell>
                                <TableHeaderCell>Name</TableHeaderCell>
                                <TableHeaderCell>Request</TableHeaderCell>
                                <TableHeaderCell>Status</TableHeaderCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {users.map((item) => (
                                <TableRow key={item.user}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.fullname}</TableCell>
                                    <TableCell>{item.request}</TableCell>
                                    <TableCell>
                                        <Badge color={item.status == 'active' ? 'emerald' : 'yellow'} icon={RiFlag2Line}>
                                            {item.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <Button className='w-full mt-8' icon={RiArrowLeftLine} iconPosition="left" variant="light" onClick={() => setIsOpen(false)}>
                        Got it!
                    </Button>
                </DialogPanel>
            </Dialog>
        </>

    );
}