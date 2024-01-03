import React, { useEffect, useState } from "react";
import RemoveBtn from "./RemoveBtn";

const AddButton = () => {
    const [inputValue, setInputValue] = useState(""); // Initialize state with an empty string

    useEffect(() => {
        // Load data from local storage on component mount
        const storedValue = localStorage.getItem("inputValue");
        if (storedValue) {
            setInputValue(storedValue);
        }
    }, []); // Empty dependency array ensures this effect runs only once on mount

    const addElement = () => {
        const inputElement = document.getElementById("input");
        const inputValue = inputElement.value;

        // Update state with the new input value
        setInputValue(inputValue);

        // Save data to local storage
        localStorage.setItem("inputValue", inputValue);

        var newLi = document.createElement("li");
        newLi.classList.add("list-item");
        newLi.innerHTML = `
            <div className="text">${inputValue}</div>
            <button className="remove">
                <i className="fa-solid fa-trash"></i>
            </button>
        `;
        document.body.append(newLi);
    };

    return (
        <button onClick={addElement} id="add">
            <svg
                height="426.66667pt"
                viewBox="0 0 426.66667 426.66667"
                fill="white"
                fontWeight="normal"
                width="426.66667pt"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
            </svg>
        </button>
    );
};

export default AddButton;
