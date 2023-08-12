import './ProductCard.css'

export default function DashboardCard(props){
    const { item } = props;
    const { stockType, stockValue } = item;
    let stockClass = stockType.split(' ').join('');

    return <div className="productcard-card">
        <div className={`productcard-value ${stockClass}`}>
            {stockValue}
        </div>
        <div className="productcard-content">
            {stockType}
        </div>
    </div>
}