import { useForm } from "react-hook-form";
import CounterPage from "./pages/CounterPage"
import Form from "./pages/Form";
import './App.css'


export default function App() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)


  return (
  <>
  {/* <CounterPage/> */}
  <Form/>
  </>
  )
}