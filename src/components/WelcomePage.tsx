import {useParams} from "react-router-dom";


export default function WelcomePage() {

    const {name} =useParams();

    return(
        <div>
            <h1>Welcome {name}</h1>





        </div>
    )
}