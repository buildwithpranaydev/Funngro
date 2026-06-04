export default function Ticker() {
  const items = [
    'As Seen on Shark Tank India',
    '50 Lakh+ Teenlancers',
    '4,000+ Partner Companies',
    '1,000+ Live Projects',
    'Real Work. Real Money.',
  ];

  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker-inner">
        {items.map((t, i) => <span key={`a-${i}`}>{t}</span>)}
        {items.map((t, i) => <span key={`b-${i}`}>{t}</span>)}
      </div>
    </div>
  );
}
