import React from 'react';
import {Link} from "react-router-dom";
import header from './css/header.css'
function Header(props) {
    return (
        <header className={'header'}>
            <ul className={'list'}>
                <li className={'item'} ><Link to={'/first'} className={"text-success"}>Առաջին տնային</Link></li>
                <li className={'item'}><Link to={'/second'} className={'text-warning'}>Երկրորդ տնային</Link></li>
                <li className={'item'}><Link to={'/third'} className={'text-primary'}>Երրորդ տնային</Link></li>
            </ul>
        </header>
    );
}

export default Header;