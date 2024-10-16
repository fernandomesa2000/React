

const Button = ({type,children, ...buttonProps}) => {
    const className = type === "primary"? "Primary Button" : "Secondary Button";
    return (
        <button className={`Button ${className}`} {...buttonProps}>
            {children}
        </button>
    )
};

const LogginButton = ({type, children, ...buttonProps}) => {
    return (
        <Button
        type = "Secondary"
        {...buttonProps}
        onClick={() =>{
            alert("Logged in!");
        }}
        //If {...buttonProps} putted here instead, onClick property won't be added
        >
            {children}
        </Button>
    );
};

function SpreadAtributes() {
    return(
        <div className="App">
            <header className="Header">Little Lemon Restaurant 🍕</header>
            <Button type="primary" onClick={() => alert("Signing up!")}>
                Sign Up
            </Button>
            <LogginButton type="secondary" onClick={() => alert("Signing up!")}>
                Login
            </LogginButton>
        </div>
    )
}

export default SpreadAtributes;