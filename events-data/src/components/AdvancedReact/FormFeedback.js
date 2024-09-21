import {useState} from 'react'

const Form = () => {

    const [score,setScore] = useState("10");
    const [comment,setComment] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Number(score) <= 5 && comment.length <= 10) {
            alert("Please leave us a comment explaining why your experience was poor")
        }
        setScore("10");
        setComment("");
        console.log("Submited nigg4");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback form</h2>
                    <div className='Field'>
                        <label>Score: {score} ⭐</label>
                        <input
                        type="range"
                        min="0"
                        max="10"
                        value={score}
                        onChange={(e)=> {setScore(e.target.value)}}
                        />
                    </div>
                    <div className='Field'>
                        <label>Comment:</label>
                        <textarea value={comment} onChange={e=>{setComment(e.target.value)}}></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Form;