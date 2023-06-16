import { useContext, useState} from "react";
import ItemContext from "./Item-Context";
import axios from 'axios'

function ItemProvider(props) {

    const [items, setItems] = useState([]);

    const addItemHandler = async (item) => {
        let Items = [...items, item];
        try{
        const OnlineItems= await axios.post('https://crudcrud.com/api/64fc8a70a0954c20a8b35628d3af458c/Items',item)
        console.log(OnlineItems)
        }
        catch(e){
            console.log(e)
        }
        setItems(Items);
        
    };

    const itemSync= async ()=>{
        console.log('items sync function')
        try{
        const OnlineItems= await axios.get('https://crudcrud.com/api/64fc8a70a0954c20a8b35628d3af458c/Items')
        console.log(OnlineItems.data)
        setItems(OnlineItems.data)
        }
        catch(e){
            console.log(e)
        }
    }

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
        updateItems:updateItems,
        itemSync:itemSync
    };

    return (
        <ItemContext.Provider value={itemContext}>
            {props.children}
        </ItemContext.Provider>

    );
}

export default ItemProvider