import React from 'react';

import Dep from '../components/deposit/dep';

import withAuth from '../interceptors/auth';

import Layout from './layout';



const Deposit = () => {

    return (

        <>
            <Layout>
                        <div className='interface'>
                            <Dep/>
                        </div>
        
            </Layout>

        <style jsx>

        {`

            .interface {

                background-image: url('/heros/cristal.jpg');

            }

        `}

        </style>

        </>

    );

}



export default withAuth(Deposit);

