import { useState } from "react"

function Form() {
    let [input, setInput] = useState('')

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(input)
        // getInput(input)
    }
    return (
        <div>
          <form onClick={handleSubmit}>
           <input value={input} onChange={handleChange} />
           <button>Search</button>
          </form>
        </div>
    )

}

export default Form; 

//form within SearchBar component