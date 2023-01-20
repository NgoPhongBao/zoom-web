export default function ErrorMessage(props) {
  const { text = "", center } = props;
  if (text) return <span className={`text-red-600 block ${center && "text-center"}`}>{text}</span>;
  return null;
}
