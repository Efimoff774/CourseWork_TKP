import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import Row from 'react-bootstrap/esm/Row'
import { Context } from '..'
import DeviceItem from './DeviceItem'

const DeviceList = observer(({ setCart, cartItems }) => {
    const { device } = useContext(Context)

    const onAddToCart = (obj) => {
        const objNew = Object.assign({}, obj)
        // console.log(objNew)

        // const arr = obj.reduce((newObj, item) => {
        //     newObj[item] = item;
        //     return newObj;
        // }, {});
        // console.log(arr)

        Object.defineProperty(objNew, 'name',
            Object.getOwnPropertyDescriptor(objNew, '0'));
        delete objNew['0'];

        Object.defineProperty(objNew, 'price',
            Object.getOwnPropertyDescriptor(objNew, '1'));
        delete objNew['1'];

        Object.defineProperty(objNew, 'img',
            Object.getOwnPropertyDescriptor(objNew, '2'));
        delete objNew['2'];

        console.log(objNew)

        setCart([...cartItems, objNew])
    }


    // onRemoveItem =(name)=>{
    //     setCart
    // }

    console.log(cartItems)

    return (
        <Row className="d-flex">
            {device.devices.map(device =>
                <DeviceItem key={device.id} device={device} onPlus={(obj) => onAddToCart(obj)} />
            )}
        </Row>
    )
})

export default DeviceList