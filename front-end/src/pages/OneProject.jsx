import React from 'react'

export default function OneProject() {

    // code useParams adn the id in URL

    const API_URL_Plano = "http://localhost:8080/plano/projects/";

    useEffect(() => {
        axios.get(API_URL_Plano)
            .then(
                res => {
                    const occurence = res.data;
                    setDataProjets(occurence);
                }
            )
    }, []);



    return (
        <div>Hello world OneProject!</div>
    )
}