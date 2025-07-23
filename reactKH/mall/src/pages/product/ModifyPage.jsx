import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import { useParams } from 'react-router-dom';
import ModifyComponent from '../../components/product/ModifyComponent';
import useCustomMove from '../../hooks/useCustomMove';

export default function ModifyPage() {
    const { pno } = useParams();
    const { moveToProductList, moveToProductRead } = useCustomMove();

    return (
        <Container>
            <Header />
            <ModifyComponent pno={pno} moveToPruductList={moveToProductList} moveToProductRead={moveToProductRead} />
        </Container>
    );
}