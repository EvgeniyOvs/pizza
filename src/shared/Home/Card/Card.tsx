import React, {useState} from 'react';
import styles from './card.module.scss';
import {Text, Ecolor} from "../../../components";
import {useSelector, useDispatch} from "react-redux";
import {addItem, item, selektCartItemById} from "../../../redux/slices/cartSlice";
import {Link} from "react-router-dom";

interface ICardProps{
  id: string,

  imageUrl: string,
  title: string,
  price: number,
  sizes: Array<number>,
  types: Array<number>;
}
const typesNames = ['тонкое', 'традиционное'];
export function Card({id, imageUrl, title, types, sizes, price} : ICardProps) {

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const dispatch = useDispatch();

  const cartItem = useSelector(selektCartItemById(id))
  const addedCount = cartItem ? cartItem.count : 0;
  //одобавляем в корзину

  const onClickAdd = () =>{
  const item: item = {
    id,
    title,
    price,
    imageUrl,
    type: typesNames[activeType],
    size: sizes[activeSize],
      count: 0,
  }
  dispatch(addItem(item))
}

  return (
      <div className={styles.card}>
          <Link to={`/pizza/${id}`}>
              <img className={styles.image} src={imageUrl} alt='sneakers'/>
          </Link>
              <div className={styles.title}>
                <Text As="h3" size={14} color={Ecolor.black} weight={700}>
                  {title}
                </Text>
              </div>
              <div className={styles.selector}>
                <ul className={styles.selector__selectorList}>
                  {
                    types.map((item, index)=>(
                        <li key={index} onClick={()=>setActiveType(index)} className={activeType === index ? styles.selector__item + " " + styles.active : styles.selector__item}>
                          <Text size={14} color={Ecolor.black} weight={700}>
                            {typesNames[item]}
                          </Text>
                        </li>
                    ))
                  }
                </ul>
                <ul className={styles.selector__selectorList}>
                  {
                    sizes.map((item, index)=>(
                      <li key={index} onClick={()=>setActiveSize(index)} className={activeSize === index ? styles.selector__item + " " + styles.active : styles.selector__item}>
                        <Text size={14} color={Ecolor.black} weight={700}>
                          {item} см.
                        </Text>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className={styles.price}>
                <div className={styles.price__count}>
                  <Text  size={14} color={Ecolor.black} weight={700}>
                   от {price} руб.
                  </Text>
                </div>
                    <button className={styles.btn} onClick={onClickAdd}>
                              <span>
                                <Text  size={14} color={Ecolor.orange} weight={700}>
                                + Добавить
                              </Text>
                              </span>
                      {
                        addedCount > 0 &&
                          <i className={styles.btn__count}>
                            <Text  size={14} color={Ecolor.white} weight={700}>
                              {addedCount}
                            </Text>
                          </i>
                      }

                    </button>
              </div>
      </div>
  );
}
