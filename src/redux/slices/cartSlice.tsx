import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import any = jasmine.any;
import {RootState} from "../store";
import {calcTotalPrice} from "../../utils/react/calcTotalPrice";


interface activeType {
}

interface activeSize {
}

 export type item = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    type: activeType,
    size: activeSize,
    count: number,
}

type State = {
    totalPrice: number;
    items: item[]
}






const initialState : State = {
    totalPrice:0,
    items:[],
};



const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addItem(state, action:PayloadAction<item>){
            const findItem = state.items.find((obj)=> obj.id === action.payload.id);

            if(findItem){
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count:1,
                })
            }
            state.totalPrice = calcTotalPrice(state.items);
        },
        minusItem(state, action:PayloadAction<string>){
            const findItem = state.items.find((obj)=> obj.id === action.payload);
            if(findItem){
                findItem.count--;
            }
            state.totalPrice = state.items.reduce((sum, obj)=>{
                return obj.price * obj.count + sum;
            },0);
        },
        removeItem(state, action:PayloadAction<string>){
            state.items = state.items.filter((obj) => obj.id != action.payload);
        },
        clearItem(state){
            state.items=[];
            state.totalPrice = 0;
        },
    }
})

export const selectCart = (state: RootState) => state.cart;
export const selektCartItemById = (id:string)=> (state: RootState) => state.cart.items.find(obj => obj.id ===id)
export const { addItem, removeItem,  clearItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;