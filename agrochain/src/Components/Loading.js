import React from 'react'

import './loading.css';


export const Loading = () => {
    return (
        <div class="container">
            <div class="loader-holder">
                <div class="holder"><div class="box"></div></div>
                <div class="holder"><div class="box"></div></div>
                <div class="holder"><div class="box"></div></div>
            </div>
        </div>
    )
}

