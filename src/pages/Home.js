import { useQuery } from "@tanstack/react-query";
import Axios from "axios";


export const Home = () => {
    const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    if (isError) {
        return <h2>Sorry, there was an error</h2>;
    }

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p>{data?.fact}</p>
            <button onClick={refetch}>Refresh</button>
        </div>
    );
}