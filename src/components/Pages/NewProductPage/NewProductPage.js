import { useContext, useState } from 'react';
import Layout from '../../Layouts/Layout';
import { InventoryContext } from '../../../contexts/InventoryContext';
import { useNavigate } from 'react-router-dom';
import './NewProductPage.css'

const NewProductPage = () => {
    const { dispatchInventory, initFormData } = useContext(InventoryContext);
    const navigate = useNavigate();

    const [ newForm, setNewForm ] = useState(initFormData);
    const [ showError, setShowError ] = useState(false);

    const departmentChangeHandler = (event) => {
        setNewForm(prevState => ({...prevState, department: event.target.value}));
    }

    const nameChangeHandler = (event) => {
        setNewForm(prevState => ({...prevState, name: event.target.value}));
    }

    const descriptionChangeHandler = (event) => {
        setNewForm(prevState => ({...prevState, description: event.target.value}));
    }

    const priceChangeHandler = (event) => {
        setNewForm(prevState => ({...prevState, price: +event.target.value}));
    }

    const stockChangeHandler = (event) => {
        setNewForm(prevState => ({...prevState, stock: +event.target.value}));
    }

    const skuChangeHandler = (event) => {
        setNewForm(prevState => ({...prevState, sku: event.target.value}));
    }

    const supplierChangeHandler = (event) => {
        setNewForm(prevState => ({...prevState, supplier: event.target.value}));
    }

    const imageUrlChangeHandler = (event) => {
        setNewForm(prevState => ({...prevState, imageUrl: event.target.value}));
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if(newForm.department === 'none'){
            setShowError(true)
        }else{

            dispatchInventory({type: 'NEW_INV_ITEM', payload: newForm});
            navigate('/product');
        }
    }

    return <Layout>
        <h2 className='heading2'>Add new Product</h2>
        {showError && <div>Select a department</div>}
        <form onSubmit={formSubmitHandler} className='newproduct-form'>
            <div className='newproduct-item'>
                <label>Department:</label>
                <div>
                    <select defaultValue={newForm.department} onChange={departmentChangeHandler} required={true} className='newproduct-input'>
                        <option disabled={true} value={'none'}>Select Department</option>
                        <option value={'Kitchen'}>Kitchen</option>
                        <option value={'Clothing'}>Clothing</option>
                        <option value={'Toys'}>Toys</option>
                    </select>
                </div>
            </div>

            <div className='newproduct-item'>
                <label>Name:</label>
                <div><input type='text' value={newForm.name} onChange={nameChangeHandler} required={true} className='newproduct-input'/></div>
            </div>

            <div className='newproduct-item'>
                <label>Description:</label>
                <div><textarea value={newForm.description} onChange={descriptionChangeHandler} required={true} rows={'5'} className='newproduct-input'/></div>
            </div>

            <div className='newproduct-item'>
                <label>Price:</label>
                <div><input type='number' value={newForm.price} onChange={priceChangeHandler} required={true} className='newproduct-input'/></div>
            </div>

            <div className='newproduct-item'>
                <label>Stock:</label>
                <div><input type='number' value={newForm.stock} onChange={stockChangeHandler} required={true} className='newproduct-input'/></div>
            </div>

            <div className='newproduct-item'>
                <label>SKU:</label>
                <div><input type='text' value={newForm.sku} onChange={skuChangeHandler} required={true} className='newproduct-input'/></div>
            </div>

            <div className='newproduct-item'>
                <label>Supplier:</label>
                <div><input type='text' value={newForm.supplier} onChange={supplierChangeHandler} required={true} className='newproduct-input'/></div>
            </div>

            <div className='newproduct-item'>
                <label>Delivered:</label>
                <div><input type='number' defaultValue={'0'} required={true} readOnly={true} className='newproduct-input'/></div>
            </div>

            <div className='newproduct-item'>
                <label>Image URL:</label>
                <div><input type='text' value={newForm.imageUrl} onChange={imageUrlChangeHandler} required={true} className='newproduct-input'/></div>
            </div>

            <div>
                <button type='submit' className='default-btn'>Add Product</button>
            </div>

        </form>
    </Layout>
}

export default NewProductPage;