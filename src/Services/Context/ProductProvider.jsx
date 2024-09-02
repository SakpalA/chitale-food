import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext()
const ProductProvider = ({ children }) => {
  // category list
  const [categories, setCategories] = useState([])
  // console.log("available categories: ", categories)

  // category
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  // product list based on category id
  const [products, setProducts] = useState([])
  // console.log("products", products)

  // Modal
  const [showModal, setShowModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  // login
  const [loginShow, setLoginShow] = useState(false)
  const [signupShow, setSignupShow] = useState(false)

  // loading
  const [loading, setLoading] = useState(true)

  // Grid View
  const [isGridView, setIsGridView] = useState(true)

  // Sort Type
  const [sortType, setSortType] = useState('')

  // Fetch all categories
  useEffect(() => {
    axios.get("https://appy.trycatchtech.com/v3/chitale_foods/category_list")
      .then(res => {
        // console.log("response", res)
        setCategories(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Error fetching product data:", err);
        setLoading(false);
      })
  }, [])


  // Fetch all products based on category id
  useEffect(() => {
    axios.get("https://appy.trycatchtech.com/v3/chitale_foods/product_list?category_id=1")
      .then(res => {
        // console.log("response", res)
        setProducts(res.data);
        setFilteredCategories(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Error fetching product data: ", err);
        setLoading(false);
      })
  }, [])

  // Sort
  useEffect(()=>{
    if(sortType){
      const sorted = [...filteredCategories];
      if(sortType === 'priceHighToLow'){
        sorted.sort((a,b) => b.price - a.price)
      }else if(sortType === 'priceLowToHigh'){
        sorted.sort((a,b) => a.price - b.price)
      }else if(sortType === 'alphabeticallyAZ'){
        sorted.sort((a,b) => a.title.localeCompare(b.title))
      }else if(sortType === 'alphabeticallyZA'){
        sorted.sort((a,b) => b.title.localeCompare(a.title))
      }
      setFilteredCategories(sorted)
    }
  },[sortType])

  const handleSortChange = (e) => {
    setSortType(e.target.value)
  }


    // Filter categories based on selected categories
    useEffect(() => {
      if (products && selectedCategories.length === 0) {
        setFilteredCategories(products);
      } else if (products) {
        setFilteredCategories(products.filter(cat => selectedCategories.includes(cat.id)));
      }
    }, [selectedCategories, products]);

  const handleCheckboxChange = (id) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter(categoryId => categoryId !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  // Modal
  const handleModalClose = () => setShowModal(false)
  const handleModalOpen = (product) => {
    // console.log("modal is open", product)
    setSelectedProduct(product);
    setShowModal(true)
  }

  // Grid View
  const switchToGridView = () => {
    setIsGridView(true)
  }

  // List View
  const switchToListView = () => {
    setIsGridView(false)
  }

  const contextValue = {
    categories,
    products,
    loginShow,
    setLoginShow,
    signupShow,
    setSignupShow,
    selectedCategories,
    handleCheckboxChange,
    filteredCategories,
    showModal,
    handleModalOpen,
    handleModalClose,
    selectedProduct,
    loading,
    isGridView,
    switchToGridView,
    switchToListView,
    handleSortChange
  }
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;