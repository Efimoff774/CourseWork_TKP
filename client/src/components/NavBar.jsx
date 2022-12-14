import React, { useContext } from 'react'
import { Context } from '..' // возможно ../index.js
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import Button from 'react-bootstrap/Button'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import 'macro-css'
import styles from './Navbar.module.scss'
import logoPods from '../assets/logoPods.svg'

const NavBar = observer(() => {
    const navigate = useNavigate()
    const { user } = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <Navbar bg="light" variant="light" className={styles.Navbar}>
            <Container>
                <NavLink to={SHOP_ROUTE} className="d-flex align-center justify-between" style={{ textDecoration: 'none' }} >
                    <img src={logoPods}></img>
                    <h4 className="ml-10">CustomPods</h4>
                </NavLink>




                {(user.isAuth) ?
                    <Nav style={{ color: 'black' }}>
                        <Button className="mr-20" variant="outline-primary" onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        {/* <Button className="mr-20" variant="outline-success"  >Корзина</Button> */}
                        <Button className="mr-20" variant="outline-danger" onClick={() => logOut()} >Выйти</Button>

                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant="outline-primary" onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar