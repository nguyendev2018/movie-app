import React from 'react'
import { Route } from 'react-router-dom';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';

export const LayoutTemplate = (props) => {
    let { Component, ...restParams } = props;
    return <Route {...restParams} render={(propsRoute) => {
        return <>
            <div>
                <Header></Header>
                <Component {...propsRoute} />
                <Footer></Footer>
            </div>


        </>

    }}
    />

}
