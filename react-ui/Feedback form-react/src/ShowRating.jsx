import React, { Component } from 'react';
import { useState, useEffect } from "react";

import { FcApproval } from "react-icons/fc";
import { BiCertification } from "react-icons/bi";
import { FiChevronsRight } from "react-icons/fi";
import RatingService from './RatingService';
import axios from 'axios';


var n3 = 2
var n4 = 3
var n5 = 4
const arr = [1, 2, 3, 4, 5]



{ var green3 = arr.filter((n) => { return n <= n3 }) }
{ var star3 = arr.filter((n) => { return n > n3 }) }

{ var green4 = arr.filter((n) => { return n <= n4 }) }
{ var star4 = arr.filter((n) => { return n > n4 }) }

{ var green5 = arr.filter((n) => { return n <= n5 }) }
{ var star5 = arr.filter((n) => { return n > n5 }) }




const ShowRating = () => {


    const [n2, setn2] = useState(0);
    // using Promises
    useEffect(() => {
        axios
            .get("http://localhost:8080/reviewbycourse/2")
            .then((response) => setn2(response.data));
    }, []);

   const handleClick = () => {
        console.log('this is:', this);
    };




    return (
        <div className='center'>
            <h2 className='h1'>Course Review :</h2><br />

            <div>
                <button onClick={handleClick}>
                    Click me
                </button>       

                  <h3><FiChevronsRight /> Explanations by instructor :</h3>

                {arr.filter((n) => { return n <= n2 }).map((n) => <FcApproval size={35} />)}
                {arr.filter((n) => { return n > 3 }).map((n) => <BiCertification size={35} />)}
            </div><br />

            <div>
                <h3> Question-Answers by instructor :</h3>


                {green3.map((n) => <FcApproval size={35} />)}
                {star3.map((n) => <BiCertification size={35} />)}
            </div><br />

            <div>
                <h3><FiChevronsRight /> Relavence of course content:</h3>


                {green4.map((n) => <FcApproval size={35} />)}
                {star4.map((n) => <BiCertification size={35} />)}
            </div><br />

            <div>
                <h3><FiChevronsRight /> Support by team:</h3>

                {green5.map((n) => <FcApproval size={35} />)}
                {star5.map((n) => <BiCertification size={35} />)}
            </div>
        </div>
    );

};

export default ShowRating;