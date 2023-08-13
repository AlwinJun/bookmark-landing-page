export default function Buttons({
  type,
  btnClass,
  text,
  link,
  linkClass,
  handleClick,
}) {
  return (
    <button type={type} className={btnClass} onClick={handleClick}>
      {!link ? (
        text
      ) : (
        <a href={link} className={linkClass}>
          {text}
        </a>
      )}
    </button>
  );
}
