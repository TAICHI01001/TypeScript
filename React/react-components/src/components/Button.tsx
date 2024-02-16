interface Button {
    onClick: () => void;
    label: string
    color?: string
}
export default function Button({ onClick, label, color = "#0f0" }: Button) {
    const buttonStyle = {
        backgroundColor: color,
        padding: '10px 15px',
        borderRadius: '5px',
        cursor: 'pointer',
        color: 'white',
        border: 'none',
    };
    return (
        <>
            <button style={buttonStyle} onClick={onClick}>
                {label}
            </button>
        </>
    )
}
