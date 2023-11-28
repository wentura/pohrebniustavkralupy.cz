export default function ADozvedetSeVic({ ...props }) {
  let title = props.title;
  let href = props.href;
  return (
    <a
      className="text-natyzlata inline-flex items-left pt-4 underline underline-offset-4"
      href={href}
    >
      {title}
    </a>
  );
}
