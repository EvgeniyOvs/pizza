import React, {useRef, useState} from 'react';
import styles from './sort.module.scss';
import {Ecolor, Text, ArrowButton} from "../../../components";
import { useSelector, useDispatch } from 'react-redux';
import {selectFilter, setSort, setSortAsc, Sort, SortPropertyEnum} from "../../../redux/slices/filterSlice";

interface ISort {
    name: string,
    sortProperty: SortPropertyEnum;
}

export const list:ISort[] = [
    {name: 'популярности', sortProperty: SortPropertyEnum.RATING},
    {name: 'цене', sortProperty: SortPropertyEnum.PRICE},
    {name: 'алфавиту', sortProperty: SortPropertyEnum.TITLE}
]

interface  ISortPopup{
    value: Sort;
}
export const SortPopup:React.FC<ISortPopup> = React.memo(({value})=> {

    const dispatch = useDispatch()
    const {sortAsc} = useSelector(selectFilter)

    const ref = useRef<HTMLDivElement>(null);
    if(!ref) return null;

    const [isVisible, setIsVisible] = useState(false);


    const onClickAsc = (i:boolean)=>{
        dispatch(setSortAsc(i));
    }
    const onClickListItem = (i:Sort) => {
        dispatch(setSort(i));
        setIsVisible(!isVisible);
    }
    const onClose = () => {
        setIsVisible(false)
    };

    React.useEffect(() =>{
        function handleClickDoc(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target) ){
                onClose?.();
            }
        }


        document.addEventListener('click', handleClickDoc);

        return ()=>{
            document.removeEventListener('click', handleClickDoc);
        }

    } ,[]);

    return (
        <div className={styles.sort} ref={ref}>
            <div className={styles.sort__label}>
                <button onClick={()=>onClickAsc(!sortAsc)} className={sortAsc ? styles.btn : styles.btn__active }>
                    <ArrowButton/>
                </button>

                <div className={styles.sort__title} >
                    <Text  size={14} color={Ecolor.black} weight={700}>
                        Сортировка по:
                    </Text>
                </div>
                <div onClick={()=>setIsVisible(!isVisible)}  className={styles.sort__categories}>
                    <Text  size={14} color={Ecolor.orange} weight={400}>
                        {value.name}
                    </Text>
                </div>
            </div>
            {isVisible && (
                <div className={styles.sort__popup}  >
                    <ul>
                        {list.map((obj, index)=>(
                            <li key={index} onClick={()=>onClickListItem(obj)} className={value.sortProperty === obj.sortProperty ? styles.active : '' }>
                                <Text  size={16} color={Ecolor.black} weight={700}>
                                    {obj.name}
                                </Text>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            )
            }
        </div>
    );
})
