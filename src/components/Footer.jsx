export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Republic of Jerseys</h3>
          <p>Design • Customise • Order</p>
        </div>

        <div className="footer-links">
          <a href="#">Catalogue</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-meta">
          <p>© {new Date().getFullYear()} AHZ Legacy</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
