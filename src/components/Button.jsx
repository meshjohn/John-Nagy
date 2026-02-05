const Button = ({ className, id, text }) => {
  return (
    <a
      className={`cta-wrapper ${className ?? ""}`}
      id={id}
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById("counter");
        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const elementTop = target.getBoundingClientRect().top;
          const targetPosition = elementTop + window.scrollY - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow-down" />
        </div>
      </div>
    </a>
  );
};

export default Button;