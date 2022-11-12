import React from 'react'
import Star from './Star'
import { nanoid } from 'nanoid'
import style from './Stars.module.css'

const Stars = ({Films}) => {
    return (
        <div>
            {Films.map((el) => {
                return (
                    <div className={style.container}>
                        <h3>{el.name}</h3>  
                        <div className={style.pos}>
                            <img src={el.img} key={el.id = nanoid()} alt="" />  
                            <div className={style.subpos}>
                                <Star stars={el.stars} />
                                <div className={style.btn}>
                                    <button className={style.price}>{el.price}</button>
                                    <button className={style.ques}>Подробнее--</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}        
        </div>
    );
}

export default Stars