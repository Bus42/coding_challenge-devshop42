import { useEffect, useState } from "react";
import BioCard from "./BioCard";
import Header from "./Header";
import { documents } from "../data";

const Home = () => {
  const [bioCards, setBioCards] = useState([]);

  useEffect(() => {
    //   const instance = axios.create({
    //     baseURL: "https://data.mongodb-api.com/app/data-uivri/endpoint/data/beta/action",
    //     headers: {
    //       "Accept": "*/*",
    //       "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    //       "Content-Type": "application/json",
    //       "Access-Control-Request-Headers": "*",
    //       "api-key": "oSYA2hyWQN4w7AbywmlzcdvcgjiVhQLq5pixbpCREOa63glNzC2AXidaNWUvSdoR"
    //     }
    //   });

    //   const body = JSON.stringify({
    //     "collection": "data",
    //     "database": "CodeChallenge",
    //     "dataSource": "DevShop24"
    // })

    //   instance.post("/find", body)
    //     .then(res => {
    //       setBioCards(res.data.data);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     }
    //     );

    setBioCards(documents);
  }, []);

  return (
    <div id="content-wrapper">
      <Header />
      {bioCards.map((card, index) => (
        <BioCard cardData={card} key={index} />
      ))}
    </div>
  );
};

export default Home;
