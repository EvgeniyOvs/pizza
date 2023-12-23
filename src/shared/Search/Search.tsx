import React, {ChangeEvent, useRef, useState} from 'react';
import styles from './search.module.scss';
import {SearchButton, ButtonRemove} from "../../components";
import debounce from 'lodash.debounce';
import {useDispatch, useSelector} from "react-redux";
import {selectFilter, setSearchValue} from "../../redux/slices/filterSlice";

export function Search() {
    const dispatch = useDispatch()
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const {searchValue} = useSelector(selectFilter);
    const updateSearchValue = React.useCallback(
        debounce((str)=>{
            dispatch(setSearchValue(str))
        }, 250),
        []
    )
    function handleChange (event: ChangeEvent<HTMLInputElement>){
        setValue( event.target.value)
        updateSearchValue(event.target.value)
    }


    const onClickClear = ()=>{
        dispatch(setSearchValue(''))
        setValue('');
        inputRef.current?.focus();
    }



  return (
      <div className={styles.search}>
        <div className={styles.search__icon} >
          <SearchButton/>
        </div>
        <input
            ref={inputRef}
            onChange={handleChange}
            value={searchValue}
            className={styles.search__input}
            placeholder={'Поиск пицы ...'}
        />
          {value &&(
              <div className={styles.search__remove} onClick={onClickClear} >
                  <ButtonRemove/>
              </div>
          )

          }

      </div>

  );
}
