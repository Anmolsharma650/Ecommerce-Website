import React, { useEffect } from 'react'
import { getData } from './Context/DataContext'

function Categry() {
    const { data, fetchAllProducts } = getData()

    const getUniqeCatagory = (data, property) => {
        let newVal = data?.map((curElem) => {
            return curElem[property]
        })
         newVal =[...new Set(newVal)]
         return newVal
    }
    const categoryOnlyData = getUniqeCatagory(data,'category')
    console.log(categoryOnlyData);

    useEffect(() => {
        fetchAllProducts()
    }, [])

    return (
        <div className='bg-gray-100'>
<div className=' max-w-7xl mx-auto flex-wrap flex gap-4 items-center justify-around py-7 px-4'>
    {
        categoryOnlyData.map((item, index)=>{
            return <div key={index}>
                <button className=' uppercase bg-gradient-to-r from-red-500 to-purple-500  font-sans px-2 py-1 rounded-2xl text-white  cursor-pointer'>{item}</button>
            </div>
        })
    }
</div>
        </div>
    )
}

export default Categry