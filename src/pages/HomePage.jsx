import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";

const HomePage = () => {
  const [accountants, setAccountants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAccountants, setFilteredAccountants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the mock API or list.json file-----------------
    fetch("http://localhost:3002/ChartedAccoutant")
      .then((response) => response.json())
      .then((data) => setAccountants(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Filter accountants based on search query------------------------------
    const filtered = accountants.filter((accountant) =>
      accountant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredAccountants(filtered);
  }, [searchQuery, accountants]);
    //click Event apply on card------------------------------------------
  const handleCardClick = (id) => {
    const selectedAccountant = accountants.find((acc) => acc.id === id);
    if (selectedAccountant) {
      navigate(`/accountant/${id}`, { state: { accountant: selectedAccountant } });
    }
  };

  return (
    <div className="p-4 bg-gradient-to-r from-cyan-800 to-blue-500">
       <div className=" text-white">
        <div className="p-8 text-center md:p-16 mb-8">
          {/* -------------------Heading Of Home Page---------------- */}
          <h1 className="text-4xl md:text-6xl font-bold">CA Home Page!!</h1>
        </div>
       </div>
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <CardList accountants={filteredAccountants} onCardClick={handleCardClick} />
    </div>
  );
};

export default HomePage;
