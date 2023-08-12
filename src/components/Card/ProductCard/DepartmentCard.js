import { useNavigate } from 'react-router-dom';
import './ProductCard.css'
import { useContext } from 'react';
import { InventoryContext } from '../../../contexts/InventoryContext';

export default function DepartmentCard(props){
    const { item } = props;
    const {  dispatchInventory } = useContext(InventoryContext);


    const navigate = useNavigate();
    const departmentClickHandler = () => {
        dispatchInventory({type: 'CHANGE_DEPARTMENT', payload: item});
        navigate(`/product`);
    }

    return <div className="productcard-card productcard-click" onClick={departmentClickHandler}>
        <div className="department-content">
            {item}
        </div>
    </div>
}