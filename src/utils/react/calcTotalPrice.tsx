import {item} from "../../redux/slices/cartSlice";

export const calcTotalPrice = (items: item[])=>{
    return items.reduce((sum, obj)=>obj.price * obj.count + sum, 0);
}