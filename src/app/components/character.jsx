import { useEffect, useState } from "react";

export default function Character({ url }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        console.log(url, data);
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            setData(responseJson);
        });
        setLoading(false);
    }, [url]);

    return (<div>{loading ? 
        <div className="text-center text-2xl">⏳</div> 
        : <div className="bg-indigo-300 flex flex-auto flex-col rounded-full mx-10 my-2 p-5">
            <div className="text-2xl text-center font-bold text-white"> 
                {data.name}
            </div>
            <div className="flex justify-center">
                <img className="h-40 w-40 bg-indigo-100 rounded-full" src={"https://cdn.thesimpsonsapi.com/500" + data.portrait_path} alt="" />
            </div>
        </div>}
        </div>
    )
}