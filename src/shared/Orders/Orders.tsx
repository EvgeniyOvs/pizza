import React from 'react';
import styles from './orders.module.scss';
import axios from "axios";
import empty from "../../img/empty.png"
import order from "../../img/order_complete.png"
import {Text, Ecolor, OrderItem, BasketBlack, Trash, Info, ArrowLeft} from "../../components";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {clearItem, selectCart} from "../../redux/slices/cartSlice";

type ICartProps = Array<Cart>
export interface  Cart  {
  id?: string,
  imageUrl?: string,
  title?: string,
  price?: string,
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

 export  function Orders( ) {
  const dispatch = useDispatch();
  const {items, totalPrice} = useSelector(selectCart)
  const totalCount = items.reduce((sum, item)=> sum + item.count, 0);
  const onClickClear = () =>{
    if (window.confirm('Очистить корзину?')){
      dispatch(
          clearItem()
      )
    }
  }

  //определяем состояние корзины
  const [isOrderComplete, setOrderIsComplete] = React.useState(false)
  //меняем id заказа
  const [orderId, setOrderId] = React.useState(null)
  //очищаем корзину через контекст
  const onClickOrder = async  () =>{
    try {
  //     //отправляем заказ на бекэнд
      const { data } = await axios.post('http://localhost:3002/orders',
          {items : items});

      setOrderId(data.id)
      setOrderIsComplete(true)
  //     //очищаем визально добавление в корзину и корзину
      await delay(1000);
      dispatch( clearItem());

    } catch (e) {
      alert('Не удалось создать заказ')

    }

  }

  return (
      <div className={styles.orders}>

        {
          items.length >0
              //если в корзине есть карточки рендерим их, если нет заглушку инфо
              ?(<>
                  <div className={styles.orders__top}>
                <div className={styles.orders__title}>
                  <div className={styles.orders__remove} >
                    <BasketBlack/>
                  </div>
                  <Text As='h1' size={24} color={Ecolor.black} weight={700}>
                    Корзина
                  </Text>
                </div>
                <div onClick={onClickClear} className={styles.orders__clear}>
                  <div  className={styles.orders__trash} >
                    <Trash/>
                  </div>
                  <Text size={16} color={Ecolor.grey8D} weight={400}>
                    Очистить корзину
                  </Text>
                </div>
              </div>
                  <div className={styles.orders__wrapper}>
                    <ul className={styles.list}>
                      {items.map((item) => (
                          <OrderItem key={item.id} {...item}/>
                      ))

                      }
                    </ul>
                    <div className={styles.price}>
                      <ul className={styles.price__list}>
                        <li className={styles.price__item}>
                          <Text size={20}  mobileSize={16} color={Ecolor.black}>
                            Всего пицц:
                          </Text>
                          <div className={styles.dashed}></div>
                          <Text size={20} mobileSize={16} color={Ecolor.black} weight={700}>
                            {totalCount} шт.
                          </Text>
                        </li>
                        <li className={styles.price__item}>
                          <Text size={20} mobileSize={16} color={Ecolor.black}>
                            Сумма заказа:
                          </Text>
                          <div className={styles.dashed}></div>
                          <Text size={20} mobileSize={16} color={Ecolor.orange} weight={700}>
                            {totalPrice} руб.
                          </Text>
                        </li>

                      </ul>
                    </div>
                    <div className={styles.btn}>
                      <Link to="/">
                      <button className={styles.btn__back}>
                        <span className={styles.arrow}>
                            <ArrowLeft/>
                        </span>
                        <Text size={16} color={Ecolor.greyCA} weight={400}>
                          Вернуться назад
                        </Text>
                      </button>
                      </Link>
                      <button onClick={onClickOrder}  className={styles.btn__complete}>
                        <Text size={16} color={Ecolor.white} weight={400}>
                          Оформить заказ
                        </Text>
                      </button>
                    </div>
                  </div>
                  </>
              )
              :(
                  <Info
                      //меняем данные в заглушке
                      image={isOrderComplete? order :  empty}
                      title={isOrderComplete ? "Заказ оформлен"  : "Корзина пустая" }
                      description={isOrderComplete ? `Ваш заказ №${orderId} скоро будет передан курьерской доставке` : "Вероятней всего, вы не заказывали ещё пиццу.\n" +
                          "Для того, чтобы заказать пиццу, перейди на главную страницу."}
                  />
              )
        }
      </div>
  );
}

