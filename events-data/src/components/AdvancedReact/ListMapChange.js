const bestDesserts = [
    {
        id: "1",
        name: "Chocolate Cheesecake",
        rating: "4.5",
        description: "From Chupamestepenco mountains",
        price: "$5.00"
    },
    {
        id: "2",
        name: "Tiramisu",
        rating: "4.8",
        description: "Mind blowing saborcito",
        price: "$4.50"
    },
    {
        id: "3",
        name: "Baklava",
        rating: "4.7",
        description: "Unexplored shit",
        price: "$3.75"
    }
]

function ListChange () {

    const listItems = bestDesserts.map(dessert => {
        const itemText = `${dessert.name} - ${dessert.price}`;
        return <li>{itemText}</li>;
    })
    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default ListChange;