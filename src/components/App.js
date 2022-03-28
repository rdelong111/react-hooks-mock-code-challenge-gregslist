import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [theListings, changeListings] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchText, changeSearch] = useState('');
  
  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((r) => r.json())
      .then((listings) => {
        changeListings(listings);
        setIsLoaded(true);
      });
  }, []);

  function handleDelete(ID) {
    const newList = theListings.filter((listing) => listing.id !== ID);
    changeListings(newList);
  }

  if (!isLoaded) return <h3>Loading...</h3>;

  return (
    <div className="app">
      <Header onSearchSubmit={(text) => changeSearch(text)} />
      <ListingsContainer
        listings={theListings}
        onListingDelete={handleDelete}
        searchText={searchText}
      />
    </div>
  );
}

export default App;
