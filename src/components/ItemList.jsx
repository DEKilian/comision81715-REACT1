import Item from "./Item"

function ItemList ({ items }) {
    return (
    <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 px-10 mt-10 '>
      {items.map(item => <Item item={item} key={item.id} />)}
    </div>)
}

export default ItemList