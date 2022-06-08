import { Link } from 'react-router-dom';

const Recipe = (props) => {
  const { title, id, image } = props.recipe;
  return (
    <>
      <div className="col-10 mx-auto col-md6 col-lg-4 my-3">
        <div className="card">
          <img
            src={image}
            alt="recipe-pic"
            style={{ height: "14rem", width: "100%" }}
            className="img-card-top"
          />
          <div className="card-body text-capitalize">
              <h6 className="card-title">{title}</h6>
              <Link to={`/${id}`} className="btn btn-primary">Recipe Details</Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
