import React from "react";
import { Link, Outlet } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';





export default function CourseRemoveForm() {
    return (
        <>

            
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous" />
            

            {/* <section className="pb-5 header text-center"> */}
                {/* <div className="container py-5 text-white"> */}
                    {/* <header className="py-5">
                        <h1 className="display-4">Training Details</h1>

                        <hr />
                        <hr />


                    </header> */}

                    {/* List<TrainginEntity> list = (List<TrainginEntity>)ViewData["thelist"]; */}
                        <div className="row">
                            <div className="col-lg-7 mx-auto">
                                <div className="card border-0 shadow">
                                    <div className="card-body p-5">
                                        <br />
                                        {/* <a href="#" className="btn btn-primary" role="button"  data-placement="top" title="Edit">Add Faculty</a> */}

                                        <br />
                                        <hr />
                                        <hr />

                                        <div className="table-responsive">
                                            <table className="table m-0">
                                                <thead>
                                                    <tr>
                                                       
                                                      
                                                        <th scope="col">About Course</th>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Duration</th>

                                                        <th scope="col">Start Date</th>
                                                        <th scope="col">End Date</th>
                                                        <th scope="col">Course Name</th>
                                                        <th scope="col">Course Strength</th>
                                                        <th scope="col">Fees</th>
                                                        <th scope="col">Start Time</th>
                                                        <th scope="col">End Time</th>

                                                    </tr>
                                                </thead>
                                                <tbody>




                                                   




                                                    <tr>
                                                        
                                                        <td>Java</td>
                                                        <td>SHort Term</td>
                                                        <td>3 month</td>
                                                        <td>1-9-2022</td>
                                                        <td>1-1-2023</td>
                                                        <td>Java Class</td>
                                                        <td>50</td>
                                                        <td>3000</td>
                                                        <td>9:00</td>
                                                        <td>12:00</td>
                                                       
                                                        <td>


                                                            <a href="#" className="btn btn-primary" role="button" data-toggle="tooltip" data-placement="top" title="Delete">Remove</a>

                                                        </td>
                                                    </tr>



                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    {/* </div> */}
                    {/* </section> */}




                </>


                );
}