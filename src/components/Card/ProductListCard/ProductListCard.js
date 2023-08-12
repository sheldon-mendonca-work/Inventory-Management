import DashboardCard from '../ProductCard/DashboardCard';
import DepartmentCard from '../ProductCard/DepartmentCard';
import './ProductListCard.css';

export default function ProductListCard (props){
    const { data, type } = props;

    return <section className="productlist-section">
        <div className="productlist-list">
            { data.length === 0 && <h3>No items on data...</h3> }
            {
                data.length > 0 && data.map((item, index) => {
                    if(type === 'dashboard') { 
                        return <DashboardCard key={item?._id ?? index} item={item} /> 
                    }else{ 
                        return <DepartmentCard key={index} item={item} /> 
                    }
                })
            }
        </div>
    </section>
}