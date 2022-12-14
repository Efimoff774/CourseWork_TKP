import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/Image'
import { useNavigate } from 'react-router-dom'
import Star from '../assets/Star 12.svg'
import Like from '../assets/btn_active.svg'
import Plus from '../assets/btn_passive.svg'
import { DEVICE_ROUTE } from '../utils/consts'
import styles from '../card/Card.module.scss'
import 'macro-css'

const DeviceItem = (props) => {
    const navigate = useNavigate()

    const [isAdded, setIsAdded] = React.useState(false)

    const onClickPlus = () => {
        props.onPlus([props.device.name, props.device.price, props.device.img])
        setIsAdded(!isAdded)
    }

    console.log(isAdded)

    return (
        // <Col md={3} className={'mt-2'} onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>

        //     <Card className={styles.card}>
        //         <Image width={150} height={168} src={process.env.REACT_APP_API_URL + device.img} />
        //         <div className="d-flex justify-content-between align-items-center mt-10">
        //             <div className='title'>{device.name}</div>
        //             <Image className={styles.plus} width={16} height={16} src={Like} />
        //         </div>

        //     </Card>
        // </Col>
        <div className={styles.card} >

            <img width={150} height={168} src={process.env.REACT_APP_API_URL + props.device.img} alt="Фотография чехла"></img>
            <div className={styles.title} onClick={() => navigate(DEVICE_ROUTE + "/" + props.device.id)}>
                <p>{props.device.name}</p>
            </div>
            <div className="d-flex justify-between align-center">
                <div className={styles.text}>
                    <span>Цена</span>
                    <b>{props.device.price} ₽</b>
                </div>
                <img className={styles.plus} src={isAdded ? Like : Plus} alt={'btn'} onClick={onClickPlus} ></img>

            </div>

        </div>
    )
}

export default DeviceItem