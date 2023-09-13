import "../../style/shere.css";
const Slide = ({ slidedata }) => {
  const { image, Title, Description, price, Author } = slidedata;
  const imageWidth = '300px';
  const imageHeight = '250px'
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mx-5">
  <figure>
    <img src={image} 
    alt="Album"
    style={{ width: imageWidth, height: imageHeight }}
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{Title}</h2>
    <p className="text-sm text-gray-700">{Author}</p>
    <p>{Description.slice(0, 99)}</p>
    <p>price:${price}</p>
    <div className="card-actions justify-end">
      <button className=" btn btn-sm coustom-button">Add to card</button>
    </div>
  </div>
</div>
  );
};

export default Slide;
