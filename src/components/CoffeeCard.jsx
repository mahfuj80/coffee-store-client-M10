import { PropTypes } from 'prop-types';

const CoffeeCard = ({ coffee }) => {
  // eslint-disable-next-line react/prop-types
  const { name, quantity, supplier, taste, photo } = coffee;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between items-center w-full px-8">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Brand: {supplier}</p>
          <p>Taste: {taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn">view</button>
            <button className="btn">Edit</button>
            <button className="btn">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};
CoffeeCard.propTypes = {
  coffee: PropTypes.object.isRequired,
};

export default CoffeeCard;
