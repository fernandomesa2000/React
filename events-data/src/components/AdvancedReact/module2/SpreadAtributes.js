

const Button = ({type,children, ...buttonProps}) => {
    const ClassName = type === "primary"? "Primary Button" : "Secondary Button";
    return (
        <button className={`Button ${className}`} {...buttonProps}>
            {children}
        </button>
    )
};

const LoginButton = ({type, children, ...buttonProps}) => {
    return (
        <Button
        type = "Secondary"
        {...buttonProps}
        onClick={() =>{
            alert("Logged in!");
        }}
        >
            {children}
        </Button>
    )
}