import './CartWidget.css'

const CartWidget = () => {
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";
  return (
    <div>
      <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
      <strong> 10 </strong>
    </div>
  )
}

export default CartWidget