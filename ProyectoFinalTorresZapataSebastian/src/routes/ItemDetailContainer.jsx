import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../componentes/ItemDetail";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/app";
function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [joya, setJoya] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const collectionProd = collection(db, "items");
    
    const referenciaAlDoc = doc(collectionProd, id);
    getDoc(referenciaAlDoc)
      .then((res) => setJoya({ id: res.id, ...res.data() }))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h1>Cargando..</h1>;
  }

  console.log(joya);
  return <ItemDetail joya={joya} />;
}
export default ItemDetailContainer;
