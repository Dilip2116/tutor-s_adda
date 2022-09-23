import React, { Component } from 'react';
import { useState, useEffect } from "react";

import { FcApproval } from "react-icons/fc";
import { BiCertification } from "react-icons/bi";
import { FiChevronsRight,FiChevronsLeft } from "react-icons/fi";
import axios from 'axios';


const ShowRating = () => {

    const arr = [1, 2, 3, 4, 5]

    const [myData, setMyData] = useState([]);
    const n2 = myData[0];
    const n3 = myData[1];
    const n4 = myData[2];
    const n5 = myData[3];

    
    const course_id =localStorage.getItem('courseid');

    const getData = async () => {
        try {
                const res = await axios.get(`http://localhost:8080/reviewbycourse/${course_id}`)
                if(res.data !== "")
                {
                  console.log("Data1 : ",res.data);
                    setMyData(res.data);
                }
                
            } catch (err) {
                console.log(err)
            }
        }

    useEffect(() => {
       getData()
    }, []);


    return (
        <div >
            {/* <h2 className='h1'>Course Review :</h2><br /> */}

            <div>
            <h4><FiChevronsRight /> Explanations by instructor <FiChevronsLeft /></h4>

                {arr.filter((n) => { return n <= n2 }).map((n) => <FcApproval size={35} />)}
                {arr.filter((n) => { return n > n2 }).map((n) => <BiCertification size={35} />)}
            </div><br />

            <div>
            <h4><FiChevronsRight /> Question-Answers by instructor <FiChevronsLeft /></h4>

                {arr.filter((n) => { return n <= n3 }).map((n) => <FcApproval size={35} />)}
                {arr.filter((n) => { return n > n3 }).map((n) => <BiCertification size={35} />)}
            </div><br />

            <div>
            <h4><FiChevronsRight /> Relavence of course content <FiChevronsLeft /></h4>

                {arr.filter((n) => { return n <= n4 }).map((n) => <FcApproval size={35} />)}
                {arr.filter((n) => { return n > n4 }).map((n) => <BiCertification size={35} />)}
            </div><br />

            <div>
            <h4><FiChevronsRight /> Support by team <FiChevronsLeft /></h4>

                {arr.filter((n) => { return n <= n5 }).map((n) => <FcApproval size={35} />)}
                {arr.filter((n) => { return n > n5 }).map((n) => <BiCertification size={35} />)}
            </div>
        </div>
    );

};

export default ShowRating;