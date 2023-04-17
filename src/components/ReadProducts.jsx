import { useSelector } from "react-redux";

const Bingo = () => {
  const productsList = useSelector((state) => state.products.value);
  console.log(productsList);
  return (
    <div className="grid grid-cols-4 gap-4">
      {productsList.map((pro) => {
        return (
          <>
            <div className="bg-cyan-700 mt-2 rounded px-4 py-4 pt-2  text-center">
              <span className="font-bold">{pro.name}</span>
              <img
                src={pro.img}
                alt={pro.name}
                width={200}
                height={100}
                className="mx-auto"
              />
              <p>{pro.descrip}</p>
              <button className="btn-red mt-2">Delete</button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Bingo;
