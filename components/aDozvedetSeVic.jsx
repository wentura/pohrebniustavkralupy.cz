export default function ADozvedetSeVic({ ...props }) {
  let title = props.title;
  let href = props.href;
  return (
    <a className="text-indigo-500 inline-flex items-left" href={href}>
      {title}
    </a>
  );
}
