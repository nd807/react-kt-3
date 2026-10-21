export default function Header() {
  function scrollToFooter() {
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header>
      <h1>Магазин товаров</h1>
      <button onClick={scrollToFooter}>Перейти к футеру</button>
    </header>
  );
}
