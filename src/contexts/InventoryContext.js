import { createContext, useEffect, useReducer } from "react";
import { inventoryData } from "../backend/inventoryData";

export const InventoryContext = createContext();

const initInventoryData = inventoryData;
const initFormData = {
    department: "none",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier:"",
    delivered: 0,
    imageUrl: ""
}

const initInventoryState = {
    inventory : initInventoryData,
    department: 'all',
    lowStockChecked: false,
    sortBy: 'name'
}

const inventoryReducerFunction = (state, action) => {
    if(action.type === 'CHANGE_DEPARTMENT'){
        return { ...state, department: action.payload }
    }

    if(action.type === 'CHANGE_LOW_STOCK'){
        return { ...state, lowStockChecked: !state.lowStockChecked }
    }
    
    if(action.type === 'SORT_INVENTORY'){
        return { ...state, sortBy: action.payload }
    }

    if(action.type === 'INITIALIZE_INVENTORY'){
        return { ...state, inventory: action.payload }
    }

    if(action.type === 'NEW_INV_ITEM'){
        const newInvItem = {
            id: state.inventory.length+1,
            ...action.payload
        }

        const newInvList = state.inventory.concat(newInvItem);
        localStorage.setItem('inventoryList', JSON.stringify(newInvList))
        return { ...state, inventory:  newInvList}
    }

    return state;
}

export const InventoryProvider = ({children}) => {

    const [ inventoryState, dispatchInventory ] = useReducer(inventoryReducerFunction, initInventoryState);

    

    useEffect(()=>{
        if(localStorage.getItem('inventoryList') === null){
            localStorage.setItem('inventoryList', JSON.stringify(initInventoryData));
        }else{
            dispatchInventory({type: 'INITIALIZE_INVENTORY', payload: JSON.parse(localStorage.getItem('inventoryList'))});
        }
    }, [])

    return <InventoryContext.Provider value={{ inventoryState, dispatchInventory, initFormData }}>
        {children}
    </InventoryContext.Provider>
};