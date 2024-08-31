import React from 'react'
import FeactureCard from './FeactureCard'

const data = [
    {
        img: "/cart.png",
        title: "V-Mol",
        desc: "Curate Your Own Happiness",
    },
    {
        img: "/asem.png",
        title: "Transact With Ease",
        desc: "Seameless Transactions",
    },
    {
        img: "/credit.jpg",
        title: "Secure Payment",
        desc: "Fully Protected When Paying Online",
    },
]
const Feacture = () => {
  return <div className='container pt-10'>
       <div className='grid md:grid-cols-2 gap-y-8 lg:gap-y-4 lg:grid-cols-3 gap-3 ml-12'>
        {data.map((item) => (
          <FeactureCard key ={item.title}
          img={item.img}
          title={item.title}
          desc={item.desc} />
            ))}
       </div>
    </div>
};

export default Feacture