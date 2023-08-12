import { useContext } from 'react';
import Layout from '../../Layouts/Layout';
import { InventoryContext } from '../../../contexts/InventoryContext';
import { Link, useNavigate } from 'react-router-dom';
import './ProductsPage.css'

const ProductsPage = () => {
    const { inventoryState, dispatchInventory } = useContext(InventoryContext);
    const { inventory, department, lowStockChecked, sortBy } = inventoryState;

    const navigate = useNavigate();

    const departmentList = inventory.reduce((acc, {department}) => acc.indexOf(department) === -1 ? acc.concat(department): acc, []);

    const departmentChangeHandler = (event) => {
        dispatchInventory({type: 'CHANGE_DEPARTMENT', payload: event.target.value});
    }

    const lowStockChangeHandler = () => {
        dispatchInventory({type: 'CHANGE_LOW_STOCK'});
    }

    const inventorySortHandler = (event) => {
        dispatchInventory({type: 'SORT_INVENTORY', payload: event.target.value});
    }

    const getData = () => {
        let invData = inventory;

        if(department !== 'all'){
            invData = invData.filter((item) => item.department === department);
        }

        if(lowStockChecked){
            invData = invData.filter((item) => item.stock <= 10);
        }

        if(sortBy === 'price'){
            invData = invData.sort((a,b) => a.price - b.price);
        }else if(sortBy === 'stock'){
            invData = invData.sort((a,b) => a.stock - b.stock);
        }else{
            invData = invData.sort((a,b) => a.name > b.name);
        }

        return invData;
    }

    return <Layout>
        <div className='productspage-header'>
            <div className='productspage-headername'>Products</div>
            <div>
                <select defaultValue={department} onChange={departmentChangeHandler} className='productspage-select'>                    
                    <option value={'all'}>All Departments</option>
                    {
                        departmentList.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <input type='checkbox' id='lowStockItems' defaultChecked={lowStockChecked} onChange={lowStockChangeHandler}/>
                <label htmlFor='lowStockItems'>Low Stock Items</label>
            </div>
            <div>
                <select defaultValue={sortBy} onChange={inventorySortHandler} className='productspage-select'>                    
                    <option value={'name'}>Name</option>
                    <option value={'price'}>Price</option>
                    <option value={'stock'}>Stock</option>
                </select>
            </div>
            <div>
                <button onClick={()=>navigate('/product/new')} className='default-btn'>New</button>
            </div>
        </div>
        <div>
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Supplier</th>
                </tr>
            </thead>
            <tbody>
            {
                inventory.length > 0 && getData().map(item => {
                    const { id, name, description, price, stock, supplier, imageUrl } = item;
                    
                    return (<tr key={id}>
                        <td className='table-image-div'>
                            <img src={imageUrl} alt={name} className='table-image'/>
                        </td>
                        <td>
                            <Link to={`/product/${id}`}>{name}</Link>    
                        </td>
                        <td>{description}</td>
                        <td>${price}</td>
                        <td>{stock}</td>
                        <td>{supplier}</td>
                    </tr>)
                })
            }
            </tbody>
        </table>
        </div>
    </Layout>
}

export default ProductsPage;