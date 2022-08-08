import { FC, useEffect, useState } from "react";
import CSS from "csstype";

const Header: FC = () => {
  const [bgstyle, setBgstyle] = useState<CSS.Properties>({ display: "flex" });
  const fetchImg = async () => {
    const response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
    );
    const data = await response.json();
    if (data.error || !data) {
        const backgroundStyle: CSS.Properties = {
            backgroundColor: 'rgb(125, 152, 240)',
          };
          setBgstyle(backgroundStyle);
    } else {
        const backgroundStyle: CSS.Properties = {
            background: `url(${data.hdurl}) no-repeat`,
            backgroundPosition: "center",
          };
          setBgstyle(backgroundStyle);
    }
  };

  useEffect(() => {
    fetchImg();
  }, []);

  return (
    <header style={bgstyle}>
      <div className="title">
        <h2>ARMAGGEDON V2</h2>
        <p>Сервис заказа уничтожения астероидов, опасно подлетающих к Земле.</p>
      </div>
        <ul className="nav">
          <li className="active">Астеройды</li>
          <li>Заказ</li>
        </ul>
    </header>
  );
};

export default Header;
