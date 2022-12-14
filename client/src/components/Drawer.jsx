import styles from './index.scss'
import Delete from '../assets/delete.svg'
import Arrow from '../assets/arrow.svg'


function Drawer({ onCloseCart, items, onRemove }) {

    // Чтобы хранить в пропсах по умолчанию, то надо дестрктуризировать и туда запихивать че захоттим
    return (

        <div className="overlay">

            <div className="drawer">
                <h2 className="blue">Корзина <img className="delete" src={Delete} alt="delete" onClick={onCloseCart}></img></h2>
                <div className="items">
                    {console.log(items)}
                    {items.map((obj) => (

                        <div className="CartItem d-flex align-center mb-20">
                            <img className="mr-20" width={80} height={90} src={process.env.REACT_APP_API_URL + obj.img} alt="pic"></img>
                            <div>
                                <p className="mb-5">{obj.name}</p>
                                <b>{obj.price}₽</b>
                            </div>
                            <img onClick={() => onRemove(obj.name)} className="delete" src={Delete} alt="delete"></img>
                        </div>

                    ))}
                </div>



                <div className="cartTotalBlock">

                    <button className="blueButton">Оформить заказ <img src={Arrow} alt="arrow"></img></button>
                </div>
            </div>
        </div>
    );
}
export default Drawer;