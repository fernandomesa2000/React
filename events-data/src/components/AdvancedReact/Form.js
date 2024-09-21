import {useState} from 'react'
import "../../App.css"
const Form = () => {

    const [name,setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log("Submited nigg4");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label className='Field'>Name</label>
                        <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={(e)=> {setName(e.target.value)}}
                        />
                    </div>
                    <button disabled={!name} type="submit">
                        Submit
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default Form;