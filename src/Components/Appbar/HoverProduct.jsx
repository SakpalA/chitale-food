import React, { useContext } from 'react'
import './appbar.css'
import { ProductContext } from '../../Services/Context/ProductProvider'

const HoverProduct = () => {
    const { categories } = useContext(ProductContext)
    return (
            <ul className='flex flex-row justify-center items-center p-4'>
                {
                    categories && categories.map((img) => {
                        return <div key={img.id}>
                            <li className='w-64'>
                                <p className='mb-2 hover:text-[#ed2938] hover-name'>{img.cat_name}</p>
                                <div className='overflow-hidden'>
                                    <img
                                        src={img.cat_image}
                                        alt={img.cat_name}
                                        className='product-hover-img' />
                                </div>
                            </li >
                        </div>
                    })
                }
            </ul>
    )
}

export default HoverProduct