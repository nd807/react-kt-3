export default function Stars({ rating }) {
  const activeStars = Math.round(rating);

  return (
    <div className="rating" aria-label={`Рейтинг: ${rating} из 5`}>
      {[1, 2, 3, 4, 5].map(star => (
        <span key={star} className={star <= activeStars ? 'star active' : 'star'} aria-hidden="true">
          ★
        </span>
      ))}
      <span className="rating-value">{rating}</span>
    </div>
  );
}
