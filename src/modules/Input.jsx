const Input = () => {
    const handleChange = (e) => {
        console.log(e.target.value)
    }

  return (
    <input 
    id="input" 
    type="text" 
    placeholder="Write something here..."
    onChange={handleChange}
    />
  )
}

export default Input