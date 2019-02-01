import React from 'react';
import './Form.css';

const Form = () => {

    return (

        <div className='form show'>
            <div>
                <input placeholder=' Write your nickname'/>
                <input placeholder=' Write your password'/>
                <div>
                    <button>
                        Log in
                    </button>
                </div>
            </div>
        </div>
    )
};
export default Form;
