import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs'
import { FiShoppingBag } from 'react-icons/fi'

export default function Navbar() {
  return (
    <header>
      <Link to='/'>
        <FiShoppingBag />
      </Link>
      <h1>Coupanggy</h1>
      <nav>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='/products/new'><BsFillPencilFill /></Link>
        <button>Login</button>
      </nav>
    </header>
  );
}

