import React, { useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const initState = { pname: '', pdesc: '', price: 0, files: [] };

export default function AddComponent() {
    const [product, setProduct] = useState({ ...initState }); const uploadRef = useRef();
    const handleChangeProduct = (e) => {
        product[e.target.name] = e.target.value; setProduct({ ...product });
    };
    const handleClickAdd = (e) => {
        console.log(product)
    }
    return (
        <Container className="p-5">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control name="pname" type="text" value={product.pname} onChange={handleChangeProduct} placeholder="Enter pname"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control name="pdesc" value={product.pdesc} as="textarea" rows={4}
                        onChange={handleChangeProduct}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name="price" type="number" value={product.price} onChange={handleChangeProduct} placeholder="Enter price"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Files</Form.Label>
                    <Form.Control ref={uploadRef} type="file" multiple="true" />
                </Form.Group>
            </Form>
            <div className="d-flex justify-content-center gap-2 ">
                <Button variant="primary" type="button" onClick={handleClickAdd}>
                    저장
                </Button>
            </div>
        </Container>
    );
}