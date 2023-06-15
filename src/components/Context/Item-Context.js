import React,{createContext} from 'react'

const ItemContext = createContext({
items:[],
addItem:item=>{},
updateItems:()=>{}
})

export default ItemContext