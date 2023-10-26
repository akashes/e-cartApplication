const { useEffect,useState } = require("react")

const useFetch=(url)=>{
    const [data, setdata] = useState(null)

   useEffect(()=>{
     fetch(url).then((res) => {
			res.json().then((data) => {
				setdata(data.products)
			});
		});
   },[url])
   return data

}
export default useFetch