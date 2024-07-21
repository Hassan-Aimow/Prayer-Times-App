import React, { useState, useEffect } from "react";
import { BsMoon, BsSun, BsSunset } from "react-icons/bs";
import axios from "axios";

const Home = () => {
  const [city, setCity] = useState("New York City");
  const [prayerTimes, setPrayerTimes] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      fetchPrayerTimes(city);
    } else {
      setError("Please enter a valid city.");
    }
  }, [city]);

  const fetchPrayerTimes = async (city) => {
    try {
      const response = await axios.get(
        `https://api.aladhan.com/v1/timingsByAddress?address=${city}`
      );
      setPrayerTimes(response.data.data.timings);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error fetching prayer times:", error);
      setError("Error fetching prayer times. Please try again.");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchInput) {
      setError("Please enter a search term.");
    } else {
      setCity(searchInput);
      setError(null); // Clear any previous errors
    }
  };

  return (
    <div className="bg-background p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex items-center" />
        <div className="flex items-center mt-4 md:mt-0">
          <input
            type="search"
            placeholder="Search city..."
            className="mr-2 p-2 bg-muted text-muted-foreground border-gray-500 border-2 rounded"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="text-primary-foreground bg-red-500 px-4 py-2 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="text-muted-foreground">
          <p>{city}</p>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img className="rounded-lg" src="/pic/image.png" alt="City" />
        </div>
        <div className="space-y-4">
          {prayerTimes.Fajr && (
            <div className="flex justify-between items-center bg-card p-4 rounded-md">
              <div className="flex items-center">
                <BsSunset className="w-6 h-6 mr-2 text-primary" />
                <p className="font-bold text-primary">Fajr</p>
              </div>
              <p className="text-right text-primary">{prayerTimes.Fajr}</p>
            </div>
          )}
          {prayerTimes.Dhuhr && (
            <div className="flex justify-between items-center bg-card p-4 rounded-md">
              <div className="flex items-center">
                <BsSun className="w-6 h-6 mr-2 text-primary" />
                <p className="font-bold text-primary">Dhuhr</p>
              </div>
              <p className="text-right text-primary">{prayerTimes.Dhuhr}</p>
            </div>
          )}
          {prayerTimes.Asr && (
            <div className="flex justify-between items-center bg-card p-4 rounded-md">
              <div className="flex items-center">
                <BsSunset className="w-6 h-6 mr-2 text-primary" />
                <p className="font-bold text-primary">Asr</p>
              </div>
              <p className="text-right text-primary">{prayerTimes.Asr}</p>
            </div>
          )}
          {prayerTimes.Maghrib && (
            <div className="flex justify-between items-center bg-card p-4 rounded-md">
              <div className="flex items-center">
                <BsSunset className="w-6 h-6 mr-2 text-primary" />
                <p className="font-bold text-primary">Maghrib</p>
              </div>
              <p className="text-right text-primary">{prayerTimes.Maghrib}</p>
            </div>
          )}
          {prayerTimes.Isha && (
            <div className="flex justify-between items-center bg-card p-4 rounded-md">
              <div className="flex items-center">
                <BsMoon className="w-6 h-6 mr-2 text-primary" />
                <p className="font-bold text-primary">Isha</p>
              </div>
              <p className="text-right text-primary">{prayerTimes.Isha}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
