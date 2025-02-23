import React from 'react';
const Header=()=>{
    return (
        <div className='header'>
            <a className='logo' href='/'>
                <img src='/assets/logo.png' alt='Logo' />
            </a>

            <div className='menu'>
                <div className='item'>
                    <a href='/'>Trang chủ</a>
                </div>

                <div className='item'>
                    <a href='/'>Sản phẩm</a>
                </div>

                <div className='item'>
                    <a href='/'>Blog</a>
                </div>

                <div className='item'>
                    <a href='/'>Liên hệ</a>
                </div>
            </div>


            <div className='action'>
                <div className='item'>
                    <img src='/assets/user.png' alt='User' />
                </div>

                <div className='item'>
                    <img src='/assets/cart.png' alt='Cart' />
                </div>
            </div>
        </div>
        

        
    );
};

export default Header;