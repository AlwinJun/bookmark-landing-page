export default function ({ type, btnClass, text, link, linkClass }) {
  return (
    <button type={type} className={btnClass}>
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
