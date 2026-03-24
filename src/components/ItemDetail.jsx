import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <div className="card lg:card-side !bg-pink-100 shadow-sm p-4 max-w-4xl mx-auto">
      <figure className="flex justify-center items-center p-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="max-w-sm w-full object-contain rounded-md"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <h3 className="text-lg font-semibold">${item.price}</h3>
        <p className="text-gray-700">{item.description}</p>

        <div className="card-actions justify-end mt-4">
          <ItemCount item={item} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;