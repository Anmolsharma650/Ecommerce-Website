import React, { useEffect, useState } from 'react'
import { getData } from '../Context/DataContext'
import Filtersection from '../component/Filtersection'
import Loading from "../assets/Loading4.webm"
import ProductCard from '../component/ProductCard'

function Products() {
  const { data, fetchAllProducts } = getData()
  const [search, setSearch] = useState("")
  const [Category, setCategory] = useState("All")
  const [brand, setBrand] = useState("All")
  const [pricerange, setPriceRange] = useState([0, 5000])

  useEffect(() => {
    fetchAllProducts()
  }, [])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)

  }
  const handleBrandChange = (e) => {
    setBrand(e.target.value)
  }

  return (
    <div>
      <div className='max-x-6xl mx-auto mb-10 px-4'>
        {
          data?.length > 0 ? (
            <div className='flex gap-8'>
              <Filtersection search={search} setSearch={setSearch} Category={Category} setCategory={setCategory} brand={brand} setBrand={setBrand} pricerange={pricerange} setPriceRange={setPriceRange} handleBrandChange={handleBrandChange} handleCategoryChange={handleCategoryChange} />
              <div className='grid grid-cols-4 gap-7  mt-10'>
                {
                  data?.map((product, index) => {
                    return <ProductCard key={index} product={product} />

                  })
                }
              </div>
            </div>

          ) : (
            <div className='flex justify-center items-center h-[400px]'>
              <video muted autoPlay loop>
                <source src={Loading} type='video/webm' />
              </video>
            </div>
          )
        }

      </div>

    </div>
  )
}

export default Products