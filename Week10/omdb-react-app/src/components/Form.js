import { useState } from "react"

export default (props) => {

const [formData, setFormData] = useState({
    searchterm:""
});

const handleChange = (event) => {
    setFormData({ ...FormData, [event.target.name]: event.target.value });
}

const handleSubmit = (event) => {
    event.proventDefault();
    props.moviesearch(formData.searchterm)
}

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <input type="submit" />
        </form>
        </div>
    )
}