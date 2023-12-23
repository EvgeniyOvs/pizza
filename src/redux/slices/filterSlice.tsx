import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";

export enum SortPropertyEnum {
    RATING = 'rating',
    TITLE = 'title',
    PRICE = 'price',
}

export type Sort = {
    name: string,
    sortProperty: SortPropertyEnum,
}
export interface FilterSliceState {
    searchValue: string,
    categoryId: number,
    currentPage: number,
    sort: Sort,
    sortAsc: boolean,
    
}
const initialState : FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: 'популярности',
        sortProperty: SortPropertyEnum.RATING
    },
    sortAsc: false,

};

const filterSlice = createSlice({
    name: 'filters',
    initialState,

    reducers: {
        setCategoryId(state, action:PayloadAction<number>) {
            state.categoryId= action.payload;
        },
        setSearchValue(state, action:PayloadAction<string>) {
            state.searchValue= action.payload;
        },
        setSort(state, action:PayloadAction<Sort>) {
            state.sort= action.payload;
        },
        setSortAsc(state, action:PayloadAction<boolean>) {
            state.sortAsc= action.payload;
        },
        setCurrentPage(state, action:PayloadAction<number>) {
            state.currentPage= action.payload;
        },
        setFilters(state, action:PayloadAction<FilterSliceState>) {
            state.currentPage= Number(action.payload.currentPage);
            state.categoryId= Number(action.payload.categoryId);
            state.sort= action.payload.sort;
            state.sortAsc= action.payload.sortAsc;
        }
    }
})

export const selectFilter = (state: RootState) => state.filter;
export const { setCategoryId, setSort, setSortAsc, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;