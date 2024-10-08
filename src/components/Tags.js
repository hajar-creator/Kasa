import "../sass/Tags.scss";

//Composant qui va afficher les tags reçus en prop
function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
  );
}

export default Tags;
