import React,{createContext} from 'react'

const ItemContext = createContext({
items:[],
addItem:item=>{},
updateItems:()=>{},
itemSync:()=>{}
})

export default ItemContext