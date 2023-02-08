import { useParams } from "solid-start"

export default function ShowTodo(props) {
  const params = useParams()
  return <div>Todo {params.id}</div>
}
