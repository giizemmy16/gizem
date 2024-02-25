import React from 'react'

export default function Basket({ basket, cost }) {
    return (
        <div>
            <div className='mainBasket'>
                <div className='showBasket'>
                    <h2>Sepet</h2>
                    {basket.length === 0 && <p>Sonuç Bulunamadı</p> || null}
                    {
                        basket.map(item => (
                            <div className='basketList'>
                                <img width="100" src={item.img} />
                                <p>{item.name} x {item.amount}</p>
                                <p> TL {item.price * item.amount}</p>

                            </div>
                        ))
                    }
                    {cost && <p>Total : TL{cost}</p> || null}
                </div>


            </div>
        </div>
    )
}