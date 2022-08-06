import {Component} from 'react';

const Form =(props)=>{
    
        return(
            <div>
                <form onSubmit={props.getweather}>
                    <input type="text" name="city" placeholder='city'></input>
                    <input type="text" name="country" placeholder='country'></input>
                    <button>Get weather</button>
                </form>
            </div>
        )
    
}


export default Form;