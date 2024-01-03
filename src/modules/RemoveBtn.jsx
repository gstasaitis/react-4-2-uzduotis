const RemoveBtn = ({ inputValue }) => {

    const deleteItem = () => {
        const listItem = document.closest('.list-item')
        listItem.remove()
    }
    return (
        <>
            <div className="text">{inputValue}</div>
            <button className="remove" onClick={deleteItem}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </>
    )
}

export default RemoveBtn;