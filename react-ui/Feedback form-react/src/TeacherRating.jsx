import React, { Component } from 'react';
import { FcApproval } from "react-icons/fc";
import { BiCertification } from "react-icons/bi";

var n1 = 3;

const arr = [1, 2, 3, 4, 5]

{ var green1 = arr.filter((n) => { return n <= n1 }) }
{ var star1 = arr.filter((n) => { return n > n1 }) }




class TeacherRating extends Component {
    render() {
        return (
            <div className='center'>
                <div>
                    {green1.map((n) => <FcApproval size={35} />)}
                    {star1.map((n) => <BiCertification size={35} />)}
                </div>

            </div>
        );
    }
}

export default TeacherRating;