import { useContext } from 'react';
import Layout from '../../Layouts/Layout';
import { InventoryContext } from '../../../contexts/InventoryContext';
import ProductListCard from '../../Card/ProductListCard/ProductListCard';

const HomePage = () => {
    const { inventoryState } = useContext(InventoryContext);
    
    const totalStock = inventoryState.inventory.reduce((acc, {stock})=>(acc+ stock), 0);

    const deliveredStock = inventoryState.inventory.reduce((acc, {delivered})=>(acc+ delivered), 0);

    const lowStock = inventoryState.inventory.reduce((acc, {stock})=>(stock <= 10 ? acc+1: acc), 0);

    const inventoryStock = [
        {_id: 1, stockType: "Total Stock", stockValue: totalStock},
        {_id: 2, stockType: "Total Delivered", stockValue: deliveredStock},
        {_id: 3, stockType: "Low Stock Items", stockValue: lowStock},
    ]

    return <Layout>
        <h2 className='heading2'>Dashboard</h2>
        <ProductListCard data={inventoryStock} type="dashboard" />
    </Layout>
}

export default HomePage;