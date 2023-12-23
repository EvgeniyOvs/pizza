import React, {SetStateAction} from "react";
import {ICartItems} from "../AppComponent";

export interface MyContext {

    searchValue: string,

    setSearchValue: (s: string) => void,
}


const AppContext = React.createContext<MyContext>({
     searchValue: "", setSearchValue(s: string): void {
    }

});

export default AppContext;