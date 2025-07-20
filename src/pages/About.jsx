import React from 'react'

const About = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-red-800 text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="max-w-xl text-lg text-center mb-6">
        Welcome to Banana Chips World! <br />
        We are passionate about delivering the crunchiest, tastiest, and healthiest banana chips in a variety of flavors.
        Our chips are made from the finest ingredients and crafted with care to bring you a delightful snacking experience.
      </p>
      <p className="max-w-xl text-base text-center">
        Whether you love classic salted, spicy masala, or unique peri-peri, we have something for everyone.
        Thank you for choosing us for your snack cravings!
      </p>
    </div>
  )
}

export default About