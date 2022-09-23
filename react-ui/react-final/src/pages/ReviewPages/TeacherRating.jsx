import React, { Component } from 'react';
import { FcApproval } from "react-icons/fc";
import { BiCertification } from "react-icons/bi";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";

import { useState, useEffect } from "react";
import axios from 'axios';

// var n1 = 3;

// // const arr = [1, 2, 3, 4, 5]

// { var green1 = arr.filter((n) => { return n <= n1 }) }
// { var star1 = arr.filter((n) => { return n > n1 }) }




function TeacherRating () {
    
        const arr = [1, 2, 3, 4, 5]

        const [myData, setMyData] = useState();
        const n1 = myData;
        // const n3 = myData[1];
        // const n4 = myData[2];
        // const n5 = myData[3];

        const teacher_id=localStorage.getItem('tc_id');

        const getData = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/teacherreview/${teacher_id}`)
                if(res.data !== "")
                {
                  console.log("Data1 : ",res.data);
                    setMyData(res.data);
                }
                
                } catch (err) {
                console.log(err)
            }
        }
        console.log("teacher Data1 : ",myData);

    useEffect(() => {
       getData()
    }, []);

        return (
            // <div className='center'>
                <div>
                    <h3><FiChevronsRight />Teacher Rating <FiChevronsLeft /></h3>
                    
                    {arr.filter((n) => { return n <= n1 }).map((n) => <FcApproval size={30} />)}
                    {arr.filter((n) => { return n > n1 }).map((n) => <BiCertification size={30} />)}
                </div>

            // </div>
        );
}


export default TeacherRating;