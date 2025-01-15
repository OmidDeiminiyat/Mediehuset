import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DetailsPage() {
    const { id } = useParams(); // Get the ID from the URL
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.mediehuset.net/mediesuset/news/${id}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    if (!data) return <p>Loading...</p>;
    console.log(data);
    
    return (
        <div>
            <h1>{data.item.title}</h1>
            <p>{data.item.description}</p>
            <img src={data.item.image} alt={data.title} />
        </div>
    );
}

export default DetailsPage;
