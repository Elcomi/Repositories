import { useEffect, useState } from "react";


const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true);
      setData([]);


      fetch(url).then((res) => res.json())
        .then((json) => {
          console.log("🚀 ~ file: repository.context.js ~ line 75 ~ .then ~ json", json)
          setIsLoading(false);
          setData(json);
        })
    }

    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
  }
}
export const useGetReposWithFilters = ({ date, language, }) => {
  const url = `https://api.github.com/search/repositories?q=created:%3E${date || "2019-01-10"}${language ? `+language:${language}` : ""}&order=desc`


  const { data, ...rest } = useFetch(url)
  return { data: data.items, ...rest }
}
export const useGetReposSortedByStars = ({ perPage = 10 }) => {
  const url = `https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc&per_page=${perPage}&page=1`



  const { data, ...rest } = useFetch(url)
  return {
    data: data.items, ...rest
  }
}