import React,{createContext} from 'react'

const ItemContext = createContext({
items:[],
addItem:item=>{},
})

export default ItemContext