import './ImageItem.css';

export default function ImageItem(props) {
  return (
    <div className="image-item">
      <h3>{props.name}</h3>
      <img alt={props.name} width="100" src={props.url} />
      <p>{props.type}</p>
      <p>{props.year}</p>
      <p>{props.lives}</p>
      <span>{props.isSidekick}</span>
    </div>
  );
}
