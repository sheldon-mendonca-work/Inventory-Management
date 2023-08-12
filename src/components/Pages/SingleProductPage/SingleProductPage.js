import { useContext, useEffect } from 'react';
import Layout from '../../Layouts/Layout';
import { InventoryContext } from '../../../contexts/InventoryContext';
import { useNavigate, useParams } from 'react-router-dom';
import './SingleProductPage.css';

const SingleProductPage = () => {
    const { inventoryState } = useContext(InventoryContext);
    const { productID } = useParams();
    const navigate = useNavigate();
    
    let foundProduct = inventoryState.inventory.find(item => item.id === +productID)
    
    useEffect(()=>{
        if(foundProduct === undefined){
            navigate('/product');
        }
    }, [foundProduct, navigate])

    return <Layout>
        <h2 className='heading2'>{foundProduct?.name}</h2>
        <div className='singleProduct'>
            <div className='singleProduct-imgDiv'>
                <img src={foundProduct?.imageUrl} alt={foundProduct?.name} className='singleProduct-img'/>
            </div>
            <div className='singleProduct-item'>Price: ${foundProduct?.price}</div>
            <div className='singleProduct-item'>Stock: {foundProduct?.stock}</div>
            <div className='singleProduct-item'>Supplier: {foundProduct?.supplier}</div>
            <div className='singleProduct-item'>Department: {foundProduct?.department}</div>
            <div className='singleProduct-item'>SKU: {foundProduct?.sku}</div>
            <div className='singleProduct-item'>Delivered: {foundProduct?.delivered}</div>
            <div className='singleProduct-item'>Description: {foundProduct?.description}</div>
        </div>
    </Layout>
}

export default SingleProductPage;