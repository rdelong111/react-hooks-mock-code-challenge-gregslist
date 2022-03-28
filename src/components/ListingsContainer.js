import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onListingDelete, searchText}) {
  const searchedList = listings.filter((listing) => listing.description.includes(searchText))
    .map((listing) => (
      <ListingCard
        key={listing.id}
        id={listing.id}
        description={listing.description}
        image={listing.image}
        location={listing.location}
        onListingDelete={onListingDelete}
      />
    ));

  return (
    <main>
      <ul className="cards">
        {searchedList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
