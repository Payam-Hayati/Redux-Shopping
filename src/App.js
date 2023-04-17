import { useSelector, useDispatch } from "react-redux";
//import ReadPrducts from "./components/ReadProducts";
import { useState } from "react";
import { addProduct, deleteProduct } from "./reducers/Products";
import noImg from "./assets/images/no-image.png";

function App() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.value);
  console.log(productsList);

  const [name, setName] = useState("");
  const [descrip, setUsername] = useState("");
  // const img =
  //   "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  const img = noImg;

  return (
    <>
      <div className="">
        <h1 className="font-semibold text-gray-50">
          Work With Redux Toolkit in ReactJS | Payam Hayati
        </h1>
        <hr className="mt-2" />
        {/* Make user form */}
        <div className="py-4 mx-auto justify-center text-center">
          <input
            type="text"
            placeholder="Name..."
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Descrip..."
            className="ml-2"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <button
            className="ml-2 btn-blue"
            onClick={() => {
              dispatch(
                addProduct({
                  id: productsList[productsList.length - 1].id + 1,
                  name,
                  descrip,
                  img,
                })
              );
              //dispatch(addUser({ id: 0, name: name, username: username }));
            }}
          >
            Add User
          </button>
        </div>
        {/* Read Products */}
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
                  <button
                    onClick={() => {
                      dispatch(deleteProduct({ id: pro.id }));
                    }}
                    className="btn-red mt-2"
                  >
                    Delete
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
