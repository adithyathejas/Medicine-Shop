import { useContext, useState} from "react";
import ItemContext from "./Item-Context";

function ItemProvider(props) {

    const [items, setItems] = useState([]);

    const addItemHandler = (item) => {
        let Items = [...items, item];
        setItems(Items);
    };

    const itemContext = {
        items: items,
        addItem: addItemHandler
    };

    return (
        <ItemContext.Provider value={itemContext}>
            {props.children}
        </ItemContext.Provider>

    );
}

export default ItemProvider