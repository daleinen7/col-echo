export default function Echo(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <h3></h3>
      <p>{props.description}</p>
      <p>{props.category}</p>
      <p>Go to <a href={"echo/" + props.slug}>Echo</a></p>
    </li>
  )
}