import EachRetreats from "../EachRetreats";
import "./index.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [retreats, setRetreates] = useState([]);
  const [uiRendering, setUIRendering] = useState(false);
  const [byLocation, setByLocation] = useState('');
  const [searchValue, setSearchValue] = useState('');
  // const treatLocation = retreats.map(eachLocation => ({
  //   location : eachLocation.location
  // }))
  // console.log(treatLocation)

  useEffect(() => {
    apiCalling();
  }, [uiRendering]);


  const apiCalling = async () => {
    const url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?search=${searchValue}&location=${byLocation}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    const fetchedData = data.map((eachData) => ({
      id: eachData.id,
      image: eachData.image,
      description: eachData.description,
      condition: eachData.condition,
      date: eachData.date,
      location: eachData.location,
      price: eachData.price,
      title: eachData.title,
      type: eachData.type,
      duration: eachData.duration,
      tag: eachData.tag,
    }));
    setRetreates(fetchedData);
  };

  const handlingInput = (event) => {
    setSearchValue(event.target.value)
    setUIRendering(prevState => !prevState)
  }

  const handlingLocation = (event) => {
    setByLocation(event.target.value)
    setUIRendering(prevState => !prevState)
  }

  // const handlingPreviousPage = () => {
  //   if (pageNo > 1) {
  //     setPageNo((prevState) => prevState - 1);
  //     setUIRendering((prevState) => !prevState);
  //   }
  // };

  // const handlingNextPage = () => {
  //   if (pageNo <= 3) {
  //     setPageNo((prevState) => prevState + 1);
  //     setUIRendering((prevState) => !prevState);
  //   }
  // };

  return (
    <div className="home-container">
      <div className="cover-container">
        <img
          className="cover-image"
          src="https://yogaeastwest.com/wp-content/uploads/2017/11/slider_3.jpg"
          alt="Cover"
        />
        <h1>Discover Your Inner Peace</h1>
        <p>
          Join us for a series of wellness retreats designed to help you find
          tranquility and rejuvenation.
        </p>
      </div>
      <div className="filters-container">
        <div>
          <select className="select-background">
            <option>Filter by Type</option>
            {retreats.map((eachTreat) => (
              <option value={eachTreat.type}>{eachTreat.type}</option>
            ))}
          </select>
          <select value="Goa" onChange={handlingLocation} className="select-background">
            <option>Select by Location</option>
            {retreats.map((eachTreat) => (
              <option value={eachTreat.location}>{eachTreat.location}</option>
            ))}
          </select>
        </div>
        <input
          className="search-input"
          type="search"
          placeholder="search retrets by title"
          onChange={handlingInput}
          value={searchValue}
        />
      </div>
      <ul className="treats-list">
        {retreats.map((eachRetreat) => (
          <EachRetreats key={eachRetreat.id} retreatData={eachRetreat} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
