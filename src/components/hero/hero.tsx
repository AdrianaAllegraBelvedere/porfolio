import "./Hero.css";
import heroDesktop from "../../assets/hero-portfolio.webp";
import heroMobile from "../../assets/hero-portfolio-mobile.webp";

function Hero() {
  return (
    <section id="hero" className="hero">

      <picture className="heroPicture">
        <source media="(min-width: 768px)" srcSet={heroDesktop} />
        <img
          className="heroImage"
          src={heroMobile}
          alt="Portada del portfolio de Adriana Allegra"
        />
      </picture>

      <div className="scrollArrow bounce">
  <a href="#about" aria-label="Scroll hacia abajo">
    <svg
      className="arrowIcon"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="M7 14l5 5 5-5" />
    </svg>
  </a>
</div>

    </section>
  );
}

export default Hero;