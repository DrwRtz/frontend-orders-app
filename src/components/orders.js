'use client'

import orderService from "@/services/orderService";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";

export function Orders() {
    const [ orders, setOrders ] = useState([])

    useEffect(() => {
        orderService.getAll()
            .then(initialOrders => setOrders(initialOrders))
    }, [])

    const deleteOrder = id => {
        const target = orders.find(o => o.id == id)
        const message = `Delete order ${target.orderNumber} ?`

        if (window.confirm(message)) {
            orderService.remove(id)
                .then(res => {
                    setOrders(orders.filter(order => 
                        order.id != id
                    ))
                })
        }
    }

    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Order #</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell># Products</TableCell>
                        <TableCell>Final Price</TableCell>
                        <TableCell>Options</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        orders.map((row) => (
                            <TableRow key={row.orderNumber}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.orderNumber}</TableCell>
                                <TableCell>
                                    { new Date(row.date).toDateString() }
                                </TableCell>
                                <TableCell>{row.productAmount}</TableCell>
                                <TableCell>{row.finalPrice}</TableCell>
                                <TableCell>
                                    <Button color="secondary">
                                        Edit
                                    </Button>
                                    <Button variant="outlined" color="error" 
                                        onClick={ () => deleteOrder(row.id) }>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}