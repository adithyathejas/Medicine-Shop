import { useContext, useState} from "react";
import ItemContext from "./Item-Context";

function ItemProvider(props) {

    const [items, setItems] = useState([]);

    const addItemHandler = (item) => {
        let Items = [...items, item];
        setItems(Items);
    };

    const updateItems=(item1,quantity)=>{

        let itemIndex=items.findIndex(x=>x.name===item1.name)
        let currentItem=items[itemIndex]
        console.log('existing',currentItem.quantity)
        let newItem={...currentItem,quantity:Number(currentItem.quantity)-Number(quantity)}
        
        let updatedItems
        console.log('newitem',newItem.quantity)
        if(Number(newItem.quantity)===0){
            updatedItems=[...items.slice(0,itemIndex),...items.slice(itemIndex+1)]
        }
        else{
            updatedItems=[...items.slice(0,itemIndex),newItem,...items.slice(itemIndex+1)]
        } 
        setItems(updatedItems)

        
    }

    const itemContext = {
        items: items,
        addItem: addItemHandler,
        updateItems:updateItems
    };

    return (
        <ItemContext.Provider value={itemContext}>
            {props.children}
        </ItemContext.Provider>

    );
}

export default ItemProvider