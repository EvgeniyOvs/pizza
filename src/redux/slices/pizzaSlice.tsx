import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {RootState} from "../store";
import {FilterSliceState} from "./filterSlice";

interface activeType {

}

interface activeSize {

}

type item = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    types: Array<number>,
    sizes: Array<number>,
    count: number,
}

type State = {
    items: item[];
    status: Status;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export const fetchPizzas = createAsyncThunk<item[], FilterSliceState >(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const {currentPage, searchValue, categoryId, sort, sortAsc  } = params;
        const { data } = await  axios.get<item[]>(
            `http://localhost:3002/items?_page=${currentPage}&_limit=4&${searchValue ? `q=${searchValue}` : ''}&${categoryId > 0 ? 'category='+ categoryId + `&_sort=${sort.sortProperty}&_order=${sortAsc ? 'desc' : 'asc'}` :
                `&_sort=${sort.sortProperty}&_order=${sortAsc ? 'desc' : 'asc'}`}
                    `,
        )
        return data;
    }
)

const initialState : State = {
    items:[],
    status: Status.LOADING,
};



const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,

    reducers: {
        setItems(state, action){
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchPizzas.pending, (state) => {
            // Add user to the state array
            state.status = Status.LOADING;
            state.items =[];
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            // Add user to the state array
            state.items = action.payload;
            state.status = Status.SUCCESS;
        })
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            // Add user to the state array
                state.status = Status.ERROR,
                state.items =[];
        })
    },
})

export const selectPizza = (state: RootState) => state.pizza;
export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;