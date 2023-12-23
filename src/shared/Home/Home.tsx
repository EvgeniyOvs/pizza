import React, {useState} from 'react';
import styles from './home.module.scss';
import {Text, Ecolor, Card, Pagination, Categories, Skeletons, list, SortPopup} from "../../components";
import { useSelector, useDispatch } from 'react-redux';
import {
    FilterSliceState,
    selectFilter,
    setCategoryId,
    setCurrentPage,
    setFilters
} from "../../redux/slices/filterSlice";
import {AppDispatch} from "../../redux/store";
import  qs from 'qs';
import { useNavigate} from "react-router-dom";
import {selectPizza, Status} from "../../redux/slices/pizzaSlice";
import { fetchPizzas } from "../../redux/slices/pizzaSlice";




export function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>()
    const isSearch = React.useRef(false);
    const isMounted = React.useRef(false);
    const {searchValue, categoryId, sort, sortAsc, currentPage} = useSelector(selectFilter);
    const { items, status }= useSelector(selectPizza);
    async function FetchData(){
        dispatch(fetchPizzas({
            currentPage,
            searchValue,
            categoryId,
            sort,
            sortAsc
        }))

    }

    //если был первый рендер проверяем url параметры и сохраняем в редуксе
    React.useEffect(()=>{
        if (window.location.search){
            const params = qs.parse(window.location.search.substring(1)) as unknown as FilterSliceState
            const sort =  list.find(obj=>obj.sortProperty === params.sort.sortProperty)

            dispatch(
                setFilters(({
                    searchValue: params.searchValue,
                    categoryId: Number(params.categoryId),
                    currentPage: Number(params.currentPage),
                    sort: sort || list[0],
                    sortAsc: params.sortAsc,
                })
            ))
            isMounted.current=true;
        }
    }, [])



    React.useEffect(()=>{
        if (!isSearch.current){
            FetchData();
        }
        isSearch.current=false;
    }, [categoryId, sort.sortProperty, sortAsc, searchValue, currentPage]);

    // проверяем был ли первый рендер, если да, то вшиваем навигацию
    React.useEffect(()=>{
        if(isMounted.current){
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                sortAsc,
                currentPage
            });
            navigate(`?${queryString}`)
        }
        isMounted.current = true;
        },
        [categoryId, sort.sortProperty, sortAsc, searchValue, currentPage])

    const renderItems = () =>{
    return  items.map((item , index)=>(
                <Card
                    key={index}
                    id={item.id}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    price={item.price}
                    sizes={item.sizes}
                    types={item.types}
                     />
        ))
  }


    const onChangeCategories = React.useCallback( (id:number)=> {
        dispatch(setCategoryId(id))
    }, [])
    const onChangePage = (number: number) =>{
        dispatch(setCurrentPage(number))
    }
    const skeletons = [...new Array(10)].map((_,index)=><Skeletons key={index}/>)
    return (
      <section className={styles.catalog}>
        <div className={styles.wrapper}>
            <Categories value={categoryId} onChangeCategories={onChangeCategories}/>
            <SortPopup value={sort}/>
        </div>
          <div className={styles.title}>
              {searchValue
                  //меняем значение заголовка на текст из инпута
                  ?
                  <Text As="h1" size={32} mobileSize={24} color={Ecolor.black} weight={700}>
                      Поиск по запросу: "{searchValue}"
                  </Text>
                  :
                  <Text As="h1" size={32} mobileSize={24}  color={Ecolor.black} weight={700}>
                      Все пиццы
                  </Text>
              }
          </div>
          {
              status === Status.ERROR ? (
                  <div className={styles.error}>
                      <div className={styles.cartTitleEmpty}>
                          <Text As='h2' size={20} color={Ecolor.black} weight={700}>
                              Произошла ошибка загрузки
                          </Text>
                          <Text As='p' size={16} color={Ecolor.grey9D} weight={400}>
                              Мы уже работаем над ее устранением
                          </Text>
                      </div>
                  </div>)
                  : (
                  <div className={styles.cardWrapper}>
                      {//рендерим карточки
                          status === Status.LOADING ? skeletons : renderItems()
                      }
                  </div>
                  )
          }

    <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </section>
  );
}
