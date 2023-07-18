const misProductos = [
  { id: 1, nombre: "Camisa", precio: 1500, img: "./img/camisa-gaspar.jpg" },
  { id: 2, nombre: "Jean", precio: 900, img: "./img/jean-hombre.jpg" },
  { id: 3, nombre: "Remera", precio: 500, img: "./img/remeraninos.png" },
  { id: 4, nombre: "Zapatillas", precio: 1800, img: "./img/zapatillas.jpg" },
  { id: 5, nombre: "Blusa", precio: 600, img: "./img/blusaroja.jpg" },
  { id: 6, nombre: "Vestido", precio: 2000, img: "./img/vestido.jpg" },
  { id: 7, nombre: "vestidito", precio: 1200, img: "./img/vestido-nina.jpg" },
  { id: 8, nombre: "Zapatos", precio: 1300, img: "./img/zapatos-tacon.jpg" },
];

const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 2000);
  });
};

