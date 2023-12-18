import React, {useState} from "react";

const NewBoxForm = ({addBox})=>{
    const INITIAL_DATA = {
        color:"#000000",
        width: 50,
        height:50
    }
    const [formData, setFormData] = useState(INITIAL_DATA)   

    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const submitForm = (e)=>{
        e.preventDefault()
        addBox(formData)
        setFormData(INITIAL_DATA)
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="color">Color:</label>
            <input 
                type="color"
                id="color"
                name="color"
                placeholder="color"
                value={formData.color}
                onChange={handleChange}
            />

            <label htmlFor="width">Width</label>
            <input 
                type="number"
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height">Height</label>
            <input 
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />
            <button>Add Box!</button>
        </form>
    )
}

export default NewBoxForm;