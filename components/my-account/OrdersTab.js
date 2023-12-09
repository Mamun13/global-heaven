import Row from "react-bootstrap/Row";
import {Fragment, useEffect, useState} from "react";
import {fetchOrders} from "../../services/OrderServices";
import {currency, getOrderStatusName, getPaymentStatusName} from "../../utils/helpers";
import Link from "next/link";

const OrdersTab = () => {
    const [orders, setOrders] = useState([]);

    const fetchOrdersData = () => {
        fetchOrders({
            paginate: 'yes'
        }).then((response) => {
            if (response?.data?.data) {
                setOrders(response.data.data);
                console.log(response.data.data)
            }
        });
    }

    useEffect(() => {
        fetchOrdersData();
    }, []);

    return (
        <Fragment>
            <Row>
                <h1 className="text-capitalize font-32 fw-bolder font-jost pb-4 ">
                    Ordered Products
                </h1>
                <div className=" table-responsive">
                    <table className="table mb-5 table-width">
                        <thead>
                        <tr>
                            <th scope="col" className="text-capitalize">ID</th>
                            <th scope="col" className="text-capitalize">Order Date</th>
                            <th scope="col" className="text-capitalize">Payment Status</th>
                            <th scope="col" className="text-capitalize">Order Status</th>
                            <th scope="col" className="text-capitalize">Grand Total</th>
                            <th scope="col" className="text-capitalize">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders &&
                            orders.map((item, index) => (
                                <tr key={index}>
                                    <td className="order-list mt-3 text-capitalize">
                                        {item.id}
                                    </td>
                                    <td>{item.order_date}</td>
                                    <td>{getPaymentStatusName(item.payment_status_id)}</td>
                                    <td>{getOrderStatusName(item.order_status_id)}</td>
                                    <td>{currency(item.grand_total)}</td>
                                    <td>
                                        <Link href={`/my-account/order/${item.id}/invoice`} className="btn btn-danger btn-sm">
                                            Invoice
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Row>
        </Fragment>
    )
}
export default OrdersTab