import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  // const name = "kaung kaung";
  // const data = {name};

  const [originProducts, setOriginProducts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    fetchOriginProducts();
    setIsLoading(false);
  }, [isLoading]);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCT", payload: originProducts });

    const filterSearch = originProducts.filter((p) =>
      p.title.toLowerCase().includes(search)
    );
    dispatch({ type: "GET_PRODUCT", payload: filterSearch });
  }, [originProducts, search]);

  useEffect(() => {
    const filterCategory = originProducts.filter((c) => {
      if (category === "all") {
        return originProducts;
      } else {
        return c.category === category;
      }
    });
    dispatch({ type: "GET_PRODUCT", payload: filterCategory });
  }, [category]);

  const fetchOriginProducts = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setOriginProducts(data);
  };

  console.log(originProducts);

  const initialState = {
    products: [],
    carts: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = {
    state,
    dispatch,
    handleToggle,
    toggle,
    setToggle,
    search,
    setSearch,
    isLoading,
    category,
    setCategory,
  };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const StateContextCustom = () => useContext(StateContext);
