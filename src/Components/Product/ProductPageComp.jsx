import React, { useContext } from 'react';
import { ProductContext } from '../../Services/Context/ProductProvider';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import './product.css'
import Sort from './Sort';
import ProductModal from './ProductModal';
import ProductCategory from './ProductCategory';
import ProductList from './ProductList';

const ProductPageComp = () => {
    const {
        showModal,
        handleModalClose,
        selectedProduct,
        loading } = useContext(ProductContext);

    if (loading) {
        return (
            <div className="loading-indicator py-20">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        )
    }
    return (
        <div className='py-4'>
            <h1 className='text-3xl font-bold text-center my-4'>Products</h1>
            <Container>
                <Row>
                    <Col md={4}>
                        <aside>
                            <ProductCategory />
                        </aside>
                    </Col>
                    <Col md={8}>
                        <main>
                            <Sort />
                            <ProductList />
                        </main>
                    </Col>
                </Row>
            </Container>
            <ProductModal
                show={showModal}
                onHide={handleModalClose}
                product={selectedProduct} />
        </div >
    );
}

export default ProductPageComp;
