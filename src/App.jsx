import { useState, useEffect } from "react";
import RentalCard from "./components/Cardcomp";
import axios from "axios";
import Pick from "./components/Pick/pick";
import AvtoCard from "./components/Avtocard/avtocard";
import ResponsiveAppBar from "./components/Navbar/navbar";
function App() {
  let [products, setProducts] = useState([]);

  let fetchApi = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Xato yuz berdi:", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div className="container">
        <ResponsiveAppBar />
        <div className="flex items-center flex-row gap-8 justify-between mb-8">
          <RentalCard
            title="The Best Platform for Car Rental"
            description="Ease of doing a car rental safely and reliably. Of course at a low price."
            buttonText="Rental Car"
            backgroundColor="#007bff"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdQBc4yGqak0MONR5HxSFgy9iL_51GBX-1Zg&s"
          />
          <RentalCard
            title="Easy way to rent a car at a low price"
            description="Providing cheap car rental services and safe and comfortable facilities."
            buttonText="Rent Now"
            backgroundColor="#6c757d"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdQBc4yGqak0MONR5HxSFgy9iL_51GBX-1Zg&s"
          />
        </div>
        <div className="flex flex-row gap-9  items-center justify-between">
          <Pick
            title="Pick - Up"
            locationLabel="Locations"
            dateLabel="Date"
            timeLabel="Time"
            selectCityText="Select your city"
            selectDateText="Select your date"
            selectTimeText="Select your time"
          />
          <button className="w-16 h-16 bg-blue-600 rounded-xl	text-white	">
            ~.~
          </button>
          <Pick
            title="Drop - Off"
            locationLabel="Locations"
            dateLabel="Date"
            timeLabel="Time"
            selectCityText="Select your city"
            selectDateText="Select your date"
            selectTimeText="Select your time"
          />
        </div>
        <div className="flex justify-between pl-3 pr-3 mt-5 mb-5">
          <h2 className="text-stone-400	">Popular Car</h2>
          <h2 className="text-cyan-400">View All</h2>
        </div>
        <div className="flex flex-row flex-wrap gap-6 justify-between">
          {products.map((item) => (
            <AvtoCard
              key={item.id}
              imageUrl={item.image}
              carName={item.name}
              price={item.price}
            />
          ))}
        </div>
        <div className="flex justify-center mt-[60px] mb-[60px]">
          <button className="pt-3 pb-3 pl-4 pr-4 bg-blue-600 text-cyan-50 rounded-[8px]">
            <a href="/Admin">Admin</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
