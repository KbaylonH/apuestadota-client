import React from 'react'

import With from '../components/with/with'

import withAuth from '../interceptors/auth'

import Layout from './layout'



const Withdraw = () => {

    return (

        <>
            <Layout>
                <div className='interface'>
                    <With/>       
                </div>
            </Layout>
              
        <style jsx>

        {`


            .interface {

                background-image: url('/heros/storm.jpg');

            }

        `}

        </style>

        </>

    );

}



export default withAuth(Withdraw);

