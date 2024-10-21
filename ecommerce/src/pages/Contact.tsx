import axios from "axios";
import Button from "../components/Button";

const Contact = () => {

    const apiCall = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
            console.log(response.data)
        } catch (error) {
            console.error("Error fetching data", error)
        }
    }

    return (
        <div className="m-20">
            <h1>API</h1>
            <Button onClick={apiCall} variant={"primary"}>Api Call</Button>
        </div>
    )
}

export default Contact
