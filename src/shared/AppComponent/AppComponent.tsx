import React, {lazy, Suspense} from 'react';
import {Layout} from "../Layout";
import {Route, Routes} from "react-router-dom";
import {Home} from "../Home";


import  "../../img/pizza/1.png"
import  "../../img/pizza/2.png"
import  "../../img/pizza/3.png"
import  "../../img/pizza/4.png"
import  "../../img/pizza/5.png"
import  "../../img/pizza/6.png"
import  "../../img/pizza/7.png"
import  "../../img/pizza/8.png"




export type ICartItems = Array<Cart>

export interface Cart   {
    id?: string;
    imageUrl?: string,
    title?: string,
    price?: string,
    sizes?: Array<number>;
    types?: Array<number>;

}

const Orders = lazy(() =>
    import('../Orders')
        .then(({ Orders }) => ({ default: Orders })),
);
const FullPizza = lazy(() =>
    import('../FullPizzas')
        .then(({ FullPizza }) => ({ default: FullPizza })),
);
const NotFound = lazy(() =>
    import('../NotFound')
        .then(({ NotFound }) => ({ default: NotFound })),
);
export function AppComponent(){

    //определяем изменение в инпуте

//определяем есть ли добавленые карточки в корзине


  return (
              <Routes>
                  <Route path="/" element={<Layout/>}>
                      <Route  path="/"  element={<Home/>}/>
                      <Route  path="/orders"
                        element={
                          <Suspense fallback={ <div>Загрузка </div> }>
                              <Orders/>
                          </Suspense>
                        }
                      />
                      <Route  path="/pizza/:id"
                              element={
                                  <Suspense fallback={ <div>Загрузка </div> }>
                                      <FullPizza/>
                                  </Suspense>
                              }
                      />
                      <Route  path="*"
                              element={
                                  <Suspense fallback={ <div>Загрузка </div> }>
                                      <NotFound/>
                                  </Suspense>
                              }/>
                  </Route>
              </Routes>
  );
}
