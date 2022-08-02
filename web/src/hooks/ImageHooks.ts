import axios from "axios"
import { useQuery } from "react-query"
import config from "../config";

const useFetchWikipediaImage = (query: string) => {
    return useQuery(query, () =>
        axios.get(`${config.wikipediaBaseApiUrl}${query}`).then((resp) => resp.data)
    );
}

export default useFetchWikipediaImage;