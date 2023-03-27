import { useState } from "react";
import Card from "./components/card/Card";
import "./App.css";

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "MSI Anakart",
      image: "https://picsum.photos/id/1/5000/3333",
      info: "3.0 GHZ 3*USB 2.0",
      adet: 1,
    },
    {
      id: 2,
      title: "RAM",
      image: "https://picsum.photos/id/2/5000/3333",
      info: "16 GB Kingston",
      adet: 1,
    },
    {
      id: 3,
      title: "Ekran Kartı",
      image: "https://picsum.photos/id/3/5000/3333",
      info: "Nvdia Geforce 1050",
      adet: 1,
    },
    {
      id: 4,
      title: "Monitör",
      image: "https://picsum.photos/id/4/5000/3333",
      info: "17' Monitör",
      adet: 1,
    },
  ]);
  const [basket, setBasket] = useState([]);
  return (
    <div className="App">
      <h1>REACT UYGULAMA</h1>
      <h2>Listedeki Ürünler</h2>
      <div className="ürün">
        {product.map((eleman, index) => {
          return (
            <Card
              onClick={() => {
                const arr = [...basket];
                if (
                  arr.findIndex((ind) => {
                    return eleman.id === ind.id;
                  }) === -1
                ) {
                  arr.push(eleman);
                  setBasket(arr);
                } else {
                  arr.map((item) => {
                    if (item.id === eleman.id) {
                      return (eleman.adet += 1);
                    }
                    setBasket(arr);
                  });
                }
                console.log(basket);
              }}
              key={index}
              title={eleman.title}
              info={eleman.info}
              image={eleman.image}
            />
          );
        })}
      </div>
      <div className="sepet">
        <h2>SEPETİNİZ</h2>
        <ul className="sepeti">
          {basket.map((eleman, index) => {
            return (
              <li>
                {eleman.title + "----->" + eleman.info + " Adet: "}
                <b style={{ fontSize: "23", color: "red" }}>{eleman.adet}</b>
              </li>
            );
          })}
        </ul>
        {basket.length > 0 ? (
          <button
            onClick={() => {
              setBasket([]);
            }}
          >
            Sepeti Temizle
          </button>
        ) : (
          <h3>Sepetinizde Ürün Bulunmamaktadır</h3>
        )}
      </div>
    </div>
  );
}
export default App;
