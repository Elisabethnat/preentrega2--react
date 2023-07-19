import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id} </h3>
        <p>Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum sem ex, et venenatis lectus suscipit et. Nam sagittis rutrum tincidunt. Vivamus mi diam, iaculis non malesuada vitae, rutrum vel velit. Donec iaculis nibh sapien, sed dignissim urna faucibus at. Mauris risus eros, dapibus consequat ornare non, hendrerit sit amet felis. Vivamus a nisi sit amet metus volutpat efficitur.</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail