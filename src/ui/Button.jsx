import { Link } from "react-router-dom";

const base =
  "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

const className = {
  primary: base + " px-4 py-3 md:px-6 md:py-4",
  small: base + " px-3 py-2 md:px-5 md:py-2.5 text-xs",
  circle: base + " px-3 py-1.5 md:px-3.5 md:py-2",
  secondary:
    "inline-block text-sm border-stone-300 border-2 rounded-full font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:text-stone-600 hover:bg-stone-200 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
};

function Button({ children, disabled, to, type, onClick }) {
  if (to) {
    return (
      <Link to={to} className={className[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button className={className[type]} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button className={className[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
