import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Forum from "components/forum/ForumMain";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import axios from "axios";

function getallthreads() {
    const data = axios.get("http://localhost:8010/forum/getallthread")
        .then(function (response) {
            // console.log(response.data.data_rep)//
            return response.data.data_rep
        }).catch(function (err) {
            console.log(err)
        })
    return data
}

export default () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://localhost:8010/forum/getallthread");
            setData(response.data.data_rep);
        }
        fetchData();
    }, []);
    // console.log(data);
    return (
        <AnimationRevealPage>
            <Header />
            <Forum data={data} />
            <Footer />
        </AnimationRevealPage>
    )
}
