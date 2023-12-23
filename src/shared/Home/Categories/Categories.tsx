import React, {useState} from 'react';
import styles from './categories.module.scss';
import {Ecolor, Text} from "../../../components";

interface ICategories {
    value: number;
    onChangeCategories: (i:number)=> void;
}
const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
export const Categories: React.FC< ICategories> = React.memo(({ value, onChangeCategories }) => {



  return (
      <ul className={styles.categories}>
          {categories.map((item, index)=>(
              <li key={index} onClick={()=>onChangeCategories(index)} className={value === index ? styles.items + " " + styles.active : styles.items }>
                  <Text  size={16} color={Ecolor.black} weight={700}>
                      {item}
                  </Text>
              </li>
          ))
          }
      </ul>
  );
})

