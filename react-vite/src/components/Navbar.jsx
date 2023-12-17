
export default function Navbar(props){
    return (
    <div className="pt-10">
      <h1>{props.author}</h1>
      <h2>{props.title}</h2>
    </div>
    )
  }
  