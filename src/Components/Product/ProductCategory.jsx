import React, { useContext } from 'react';
import { ProductContext } from '../../Services/Context/ProductProvider';

const ProductCategory = () => {
    const { categories, handleCheckboxChange, selectedCategories } = useContext(ProductContext);

    return (
        <>
            <h2 className='head mt-8 text-2xl font-semibold'>Collections</h2>
            <hr className='hr mb-4' />
            {categories && categories.length > 0 ? (
                categories.map((item) => (
                    <div
                        key={item.id}
                        className='flex justify-start items-center mb-2'
                    >
                        <input
                            type="checkbox"
                            id={`category-${item.id}`}
                            name={`category-${item.id}`} // Make sure name is unique
                            value={item.cat_name}
                            onChange={() => handleCheckboxChange(item.id)}
                            checked={selectedCategories.includes(item.id)}
                            className='mr-2 text-md'
                        />
                        <label htmlFor={`category-${item.id}`}>{item.cat_name}</label>
                    </div>
                ))
            ) : (
                <p>No categories available.</p>
            )}
        </>
    );
};

export default ProductCategory;
