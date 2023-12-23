import React from 'react';
import styles from './notfoundblock.module.scss';
import {Ecolor, Text, Smile} from "../../../components";


export function NotFoundBlock() {
  return (
      <div className={styles.wrapper}>
        <div className={styles.wrapper__title}>
          <Smile/>
          <Text As={"h1"} size={20} color={Ecolor.black} weight={700}>
            Ничего не найдено
          </Text>
            <Text size={16} color={Ecolor.black} weight={700}>
                К сожалению данная страница отсутсвует в нашем интерет магазине
            </Text>
        </div>
      </div>
  );
}
