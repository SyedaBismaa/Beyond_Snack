import React from 'react'
import PCard from '../componants/PCard'

const Product = () => {

const products = [
  {
    id: 1,
    name: "Salt & Black Pepper",
    price: "₹99",
    img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/salt-black-bg.webp?updatedAt=1753158660682",
    desc: "Classic banana chips with a hint of salt and black pepper.",
  },
  {
    id: 3,
    name: "Peri Peri",
    price: "₹109",
    img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/peri-peri-bg.png?updatedAt=1753158662697",
    desc: "Hot and spicy Peri Peri banana chips bursting with bold flavor.",
  },
   {
    id: 5,
    name: "Desi Masala",
    price: "₹119",
    img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Desi-masala-bg.webp?updatedAt=1753158244383",
    desc: "Spicy and tangy banana chips with a true desi masala twist.",
  },
  {
    id: 4,
    name: "Peri Peri (Extra Spicy)",
    price: "₹129",
    img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/peri-peri-bg.png?updatedAt=1753158662697",
    desc: "Extra-spicy Peri Peri flavor for those who like it fiery and bold.",
  },
    {
    id: 2,
    name: "Salt & Black Pepper (XL Pack)",
    price: "₹149",
    img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/salt-black-bg.webp?updatedAt=1753158660682",
    desc: "Larger pack of our best-selling Salt & Pepper flavor for true snack lovers.",
  },
 
  {
    id: 6,
    name: "Desi Masala (Family Pack)",
    price: "₹169",
    img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Desi-masala-bg.webp?updatedAt=1753158244383",
    desc: "A larger family pack of your favorite masala chips — more flavor, more fun.",
  },
  {
    id: 7,
    name: "Original Style",
    price: "₹99",
    img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Original-style-bg.webp?updatedAt=1753158661005",
    desc: "Crispy, lightly salted banana chips. Perfect for snacking anytime.",
  },
  {
    id: 1,
    name: "Salt & Black Pepper",
    price: "₹99",
    img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/salt-black-bg.webp?updatedAt=1753158660682",
    desc: "Classic banana chips with a hint of salt and black pepper.",
  },
  {
    id: 8,
    name: "Original Style (Combo Pack)",
    price: "₹139",
    img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Original-style-bg.webp?updatedAt=1753158661005",
    desc: "Combo pack of classic Original Style chips for sharing and snacking.",
  },
  {
    id: 9,
    name: "Sour Cream & Onion",
    price: "₹109",
    img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/sauce-creame.webp?updatedAt=1753158660754",
    desc: "Smooth sour cream and onion flavor for a rich, tangy taste.",
  },
  {
    id: 10,
    name: "Sour Cream & Onion (Double Pack)",
    price: "₹159",
    img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/sauce-creame.webp?updatedAt=1753158660754",
    desc: "Double pack of creamy and tangy chips to keep your cravings satisfied.",
  },
   
  {
    id: 6,
    name: "Desi Masala (Family Pack)",
    price: "₹169",
    img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/Desi-masala-bg.webp?updatedAt=1753158244383",
    desc: "A larger family pack of your favorite masala chips — more flavor, more fun.",
  },
   {
    id: 9,
    name: "Sour Cream & Onion",
    price: "₹109",
    img: "https://ik.imagekit.io/syedabismah/BeyondSnacksImages/sauce-creame.webp?updatedAt=1753158660754",
    desc: "Smooth sour cream and onion flavor for a rich, tangy taste.",
  },
];

  return (
    <div className='p-10 flex gap-10  flex-wrap'>
        {products.map(function(elem){
            return <PCard name={elem.name} price={elem.price} img={elem.img}/>
        })}
    </div>
  )
}

export default Product