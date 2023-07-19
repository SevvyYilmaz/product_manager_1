import React from 'react'

const Form = () => {
    return (
        <div>
            <h1>Product Manager</h1>
            <form action="">
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' id='title'/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" name= 'price' id='price'/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description"/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>

    )
}

export default Form