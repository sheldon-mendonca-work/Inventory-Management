import { useContext } from 'react';
import Layout from '../../Layouts/Layout';
import { InventoryContext } from '../../../contexts/InventoryContext';
import ProductListCard from '../../Card/ProductListCard/ProductListCard';

const DepartmentPage = () => {
    const { inventoryState } = useContext(InventoryContext);
    
   const departmentList = inventoryState.inventory.reduce((acc, {department}) => acc.indexOf(department) === -1 ? acc.concat(department): acc, []);


    return <Layout>
        <h2 className='heading2'>Dashboard</h2>
        <ProductListCard data={departmentList} type="department" />
    </Layout>
}

export default DepartmentPage;