import React from 'react'

interface PropTypes {
    onClick: () => void;
    text: string;
}

export const Button = (props: PropTypes) => {
    const { onClick, text } = props;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onClick();
    }

    return (
        <button
            className="ui-button"
            type="submit"
            onClick={handleSubmit}
        >
            {text}
        </button>
    )
}
