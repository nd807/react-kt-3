import Stars from './Stars';

export default function ProductItem({ product, onDelete }) {
  return (
    <div className="product-item" onDoubleClick={() => onDelete(product.id)}>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Цена: {product.price} $</p>
      <Stars rating={product.rating} />
    </div>
  );
}
