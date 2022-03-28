import React, {useState} from "react";

function ListingCard({id, description, image, location, onListingDelete}) {
  const [isFavd, setFav] = useState(false);

  function handleListingDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
      .then(() => onListingDelete(id));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavd ? (
          <button onClick={() => setFav(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFav(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleListingDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
