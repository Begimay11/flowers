import React from 'react';
import { BsXCircle } from "react-icons/bs";

const Registr = () => {
    return (
       <div id="registr">
            <div className='registr'>
            <div className="registr__vhod">
            <h2>ВХОД</h2>
            <button><BsXCircle/></button>
            </div>
            {/* <button></button> */}
            <div className="registr__num">
                <input type="text" placeholder='Номер телефона'/>
                <input type="text" placeholder='Пароль'/>
                <button>Войти</button>
                {/* <button>Регистрация</button> */}
            </div>
        </div>
       </div>
    );
};

export default Registr;