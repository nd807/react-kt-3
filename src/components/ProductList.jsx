import ProductItem from './ProductItem';

export default function ProductList({ products, onDelete }) {
  if (products.length === 0) {
    return <p>Товаров больше нет.</p>;
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} onDelete={onDelete} />
      ))}
    </div>
  );
}
