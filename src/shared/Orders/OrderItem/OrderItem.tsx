import React from 'react';
import styles from '../orders.module.scss';
import {Ecolor, Text, Remove, Add, DeleteButon} from "../../../components";
import {useDispatch} from "react-redux";
import {addItem, item, minusItem, removeItem} from "../../../redux/slices/cartSlice";

class activeType {
}

class activeSize {
}

export interface  MyOrderItem  {
  id: string,
  imageUrl: string,
  title: string,
  price: number,
  count: number,
  type: activeType,
  size: activeSize,
}
export function OrderItem({  id, imageUrl, type, size, title , price, count}:MyOrderItem) {
  const dispatch = useDispatch();

  const onClickPlus = () =>{
    dispatch(
        addItem({
          id
        } as item)
    )
  }
  const onClickMinus = () =>{
    dispatch(
        minusItem(id)
    )
  }
  const onClickRemove = () =>{
    if (window.confirm('Вы уверены?')){
      dispatch(
          removeItem(id)
      )
    }
  }
  return (
      <li className={styles.list__item}
      >
        <div className={styles.list__descr}>
          <div
              style={{ backgroundImage: `url(${imageUrl})` }}
              className={styles.list__img}
          >
          </div>
          <div className={styles.list__title}>
            <Text  size={20} mobileSize={16} color={Ecolor.black} weight={700}>
              {title}
            </Text>
            <Text  size={16} mobileSize={12} color={Ecolor.grey8D} weight={400}>
              {type} {size} см
            </Text>
          </div>
        </div>
        <div className={styles.count}>
          <button disabled={count === 1}  onClick={onClickMinus} className={count === 1 ? styles.count__remove + " " + styles.disabled :styles.count__remove }>
            <Remove/>
          </button>
          <Text size={20} mobileSize={16} color={Ecolor.black} weight={700}>
            {count}
          </Text>
          <button onClick={onClickPlus} className={styles.count__add}>
            <Add/>
          </button>
        </div>
        <div>
          <Text size={20} mobileSize={16} color={Ecolor.black} weight={700}>
            {price * count} руб.
          </Text>
        </div>
        <div onClick={onClickRemove} className={styles.remove}>
          <DeleteButon/>
        </div>
      </li>
  );
}
