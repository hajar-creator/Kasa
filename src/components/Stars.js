import "../sass/Stars.scss";

function Stars({ count }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <i
        key={i}
        className={`fa-star fa-solid ${i < count ? "filled" : "empty"}`}
      ></i>
    );
  }
  return <div className="stars">{stars}</div>;
}

export default Stars;
