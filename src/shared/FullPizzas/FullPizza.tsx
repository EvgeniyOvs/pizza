import React, {useState} from 'react';
import styles from './fullpizza.module.scss';
import {Ecolor, Text} from "../../components";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
export interface Pizza {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    types: Array<number>,
    sizes: Array<number>
}
export function FullPizza() {
    const [pizza, setPizza] = useState<Pizza>();
  const { id } = useParams();
    const navigate = useNavigate();


  React.useEffect(()=>{
      async function fetchPizza() {
        try {
            const {data} = await axios.get('http://localhost:3002/items/' + id);
            setPizza(data)
        } catch (e) {
            console.log(e)
            navigate('/')
        }
      }
      fetchPizza();
  }, [])

    if(!pizza){
        return   <div className={styles.title}>
            <Text As="h2" size={14} color={Ecolor.black} weight={700}>
                Идет загрузка
            </Text>
        </div>;
    }
console.log(pizza.imageUrl)
  return (
    <div className={styles.fullPizza}>
      <img className={styles.image} src={`/` + pizza.imageUrl} alt='sneakers'/>
      <div className={styles.title}>
        <Text As="h2" size={14} color={Ecolor.black} weight={700}>
            {pizza.title}
        </Text>
      </div>
      <div className={styles.descr}>
        <Text As="p" size={14} color={Ecolor.black} weight={700}>
          2222
        </Text>
      </div>
      <div className={styles.price}>
        <Text As="h4" size={14} color={Ecolor.black} weight={700}>
            {pizza.price}
        </Text>
      </div>
    </div>
  );
}
