const misProductos = [
  { id: "1", nombre: "Camisa", precio: 1500, img: "../img/camisa-gaspar.jpg", idCat:"2" },
  { id: "2", nombre: "Jean", precio: 900, img: "../img/jean-hombre.jpg", idCat:"2" },
  { id: "3", nombre: "Remera", precio: 500, img: "../img/remeraninos.png", idCat:"2" },
  { id: "4", nombre: "Zapatillas", precio: 1800, img: "../img/zapatillas.jpg", idCat:"2" },
  { id: "5", nombre: "Blusa", precio: 600, img: "../img/blusaroja.jpg", idCat:"3" },
  { id: "6", nombre: "Vestido", precio: 2000, img: "../img/vestido.jpg", idCat:"3" },
  { id: "7", nombre: "vestidito", precio: 1200, img: "../img/vestido-nina.jpg", idCat:"3" },
  { id: "8", nombre: "Zapatos", precio: 1300, img: "../img/zapatos-tacon.jpg", idCat:"3" },
]

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 100)
  })
}

export const getUnProducto = (id) => {
  return new Promise(resolve => {
    setTimeout( () => {
        const producto = misProductos.find(prod=> prod.id === id);
        resolve(producto);
    }, 100)
  })
}

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise ( resolve => {
     setTimeout( () => {
          const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
          resolve(productosCategoria);
     }, 100 )
  })
}
