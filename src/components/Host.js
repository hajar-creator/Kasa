import "../sass/Host.scss";

function Host({ host }) {
  return (
    <div className="host">
      <h3 className="host__name">{host.name}</h3>
      <img className="host__img" src={host.picture} alt={host.name} />
    </div>
  );
}

export default Host;
