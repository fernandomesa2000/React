import * as React from 'react';

const Row = ({children, spacing}) => {

    const childStyle = {
        marginLeft:  `${spacing}px`
    };

    return (
        <div>
            {React.Children.map(children, (child,index) => {
                return React.cloneElement(child, {
                    style: {
                        ...child.props.style,
                        ...(index > 0 ? childStyle: {})
                    },
                });
            })}
        </div>
    )
}

function LiveOrders () {
    return (
        <div>
            <Row spacing={32}>
                <p>Pizza Doble queso pai</p>
                <p>2</p>
                <p>30$ Luk's</p>
                <p>6:30 pm</p>
                <p>Chimbo Emilio</p>
            </Row>
        </div>
    )
}

export default LiveOrders;