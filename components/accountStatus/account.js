import React from 'react';

const Account = () => {
    return (
        <>
        <div>

<table className='desktop-table'>

    <thead>

        <tr>

            <th>Fecha y hora </th>   

            <th>Monto</th>

            <th>Origen</th>
        </tr>

    </thead>

    <tbody>

        <tr>
        
                <td className='date-td'>04/10/2022 20:01</td>  

                <td className='green'>
                    + 100
                   
                </td>

                <td>Apuesta Ganada</td>

        </tr>
        <tr>
        
                <td className='date-td'>04/10/2022 20:01</td>  

                <td className='green'>
                    + 10
                   
                </td>

                <td>Depósito</td>

        </tr>
        <tr>
        
                <td className='date-td'>03/10/2022 15:01</td>  

                <td className='red'>
                    - 50
                   
                </td>

                <td>Retiro</td>

        </tr>
        <tr>
        
        <td className='date-td'>02/10/2022 20:01</td>  

        <td className='green'>
            + 1
           
        </td>

        <td>Bono por referidos</td>

</tr>

    </tbody>

</table>





</div>
            <style jsx>

{`



.desktop-table {

    padding: 20px;

    margin-top: 20px;

    width:100%;

}

table {

    border: 1px solid transparent;

    border-radius: 8px;

    background-image: linear-gradient(to bottom,#161629 32px,rgba(22,22,41,0));

    border-image: linear-gradient(to bottom,rgba(255,255,255,.1),rgba(255,255,255,0))1;

    

}



th {

    color: #fff;

    opacity: 0.48;

}

td {

    color: #fff;

    text-align: center;

    padding: 10px 20px;

}



.lastCol {

    padding: 10px!important;

}





    



    th, td {

        font-family: 'Roboto Mono', monospace;

    }



    .hero_img {

        width: 70px;

        height: 50px;

        border-radius: 8px;

    }



    .d-match {

        display: flex;

        flex-direction: row;

    }



    .d-match-body {

        text-align: left;

        padding-left: 10px;

    }



    .d-match-body h5 {

        font-weight: bold;

        margin-bottom: 5px;

    }



    .d-match-body div{

        font-size: 12px;

    }



    .date-td {

        font-size: 14px;

    }



    .green {

        color: #00ff00;

        font-size:14px;

    }



    .red {

        color: #ff0000;

        font-size: 14px;

    }

    



@media only screen and (max-width: 485px) {

    

    th {

        font-size: 10px;

    }

    td {

        font-size: 12px;

    }

}

    `}

</style>
        </>
    );
}

export default Account;
