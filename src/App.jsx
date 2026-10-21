import { useEffect, useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Не удалось загрузить товары');
        }
        return response.json();
      })
      .then(data => setProducts(data.products))
      .catch(() => setError('Не удалось загрузить товары. Обновите страницу.'))
      .finally(() => setLoading(false));
  }, []);

  function deleteProduct(id) {
    setProducts(products => products.filter(product => product.id !== id));
  }

  return (
    <>
      <Header />
      <main>
        <h2>Каталог товаров</h2>
        <p>Дважды нажмите на карточку, чтобы удалить товар.</p>
        {loading && <p>Загрузка товаров...</p>}
        {error && <p role="alert">{error}</p>}
        {!loading && !error && (
          <ProductList products={products} onDelete={deleteProduct} />
        )}
      </main>
      <Footer />
    </>
  );
}
