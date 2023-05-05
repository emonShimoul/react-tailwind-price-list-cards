import Feature from "../Feature/Feature";

// eslint-disable-next-line react/prop-types
const PriceCard = ({ price }) => {
  return (
    <div className="bg-indigo-400 mt-4 rounded-md p-4 flex flex-col">
      <h2 className="text-center">
        <span className="text-purple-700 text-5xl font-extrabold">
          {/* eslint-disable-next-line react/prop-types */}
          {price.price}
        </span>
        <span className="text-2xl text-white font-bold">/mon</span>
      </h2>
      {/* eslint-disable-next-line react/prop-types */}
      <h5 className="text-2xl my-6 font-bold text-center">{price.name}</h5>
      <p className="underline font-bold text-white">Features:</p>
      {/* eslint-disable-next-line react/prop-types */}
      {price?.featureList?.map((feature, i) => (
        <Feature key={i} feature={feature}></Feature>
      ))}
      <button className="w-full mt-auto bg-green-500 hover:bg-green-700 py-2 rounded-md text-white font-bold">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
