import Link from 'next/link';

// Navbar component.
export default function Navbar() {
  return (
    <nav id="nav" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <span id="site-title" className="navbar-brand mb-0 h1">Wordhell</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link id="a" className="nav" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link id="a" className="nav" href="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link id="a" className="nav" href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}