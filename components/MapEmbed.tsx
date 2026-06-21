export default function MapEmbed() {
  return (
    <div className="map-wrap">
      <a
        className="btn btn-primary map-nav"
        href="https://www.google.com/maps/dir/?api=1&destination=Rovinka%2C%20Slovakia"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Navigovať do showroomu WoodSteel v Rovinke (otvorí Google Mapy)"
      >
        Navigovať
      </a>
      <iframe
        src="https://www.google.com/maps?q=Rovinka%2C%20Slovakia&z=14&output=embed"
        title="Mapa – showroom WoodSteel, Rovinka, okres Senec"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
