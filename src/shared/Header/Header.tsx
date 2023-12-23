import React from 'react';
import styles from './header.module.scss';
import {Ecolor, Text, Search, LogoButton, BasketButton} from "../../components";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCart} from "../../redux/slices/cartSlice";


export function Header() {
    const { items, totalPrice } = useSelector(selectCart)
    const location = useLocation()
    const totalCount = items.reduce((sum, item)=> sum + item.count, 0);


  return (
      <header className={styles.header}>
        <Link to="/">
        <div className={styles.headerLeft}>
          <div className={styles.logo}>
            <LogoButton/>
          </div>
          <div className={styles.headerInfo}>
              <span className={styles.headerInfo__title}>
                  <Text As="h3" size={20} color={Ecolor.black} weight={700}>
                  REACT PIZZA
                  </Text>
              </span>
              <span className={styles.headerInfo__descr}>
                  <Text As="p" size={14} color={Ecolor.grey5C}  weight={400}>
                      самая вкусная пицца во вселенной
                  </Text>
              </span>

          </div>
        </div>
        </Link>
          {location.pathname !== '/orders' &&<Search />}
                <div className={styles.basket}>
                    <Link to="/orders">
                        {location.pathname !== '/orders' &&
                            <ul className={styles.basketList}>
                                <li className={styles.basketItem}>
                                    <Text size={14} color={Ecolor.white} weight={600}>
                                        {totalPrice} руб.
                                    </Text>
                                </li>
                                <li className={styles.basketItem}>
                                    <div className={styles.vl}></div>
                                </li>
                                <li className={styles.basketItem}>
                                    <div className={styles.basketLogo}>
                                        <BasketButton/>
                                    </div>
                                    <div className={styles.count}>
                                        <Text size={14} color={Ecolor.white} weight={600}>
                                            {totalCount}
                                        </Text>
                                    </div>
                                </li>
                            </ul>
                        }
                    </Link>
                </div>

      </header>
  );
}
