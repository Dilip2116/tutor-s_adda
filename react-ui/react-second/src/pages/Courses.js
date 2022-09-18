import React from "react";
import Gallery from "./gallery";
import  { useEffect, useMemo, useState } from "react";
import Item from "./Item";
import Axios from "axios";


function Courses() {

    // Default Value
  // var defaultSports = [
  //   { name: "ABC", category: "JAVA" },
  //   { name: "XYZ", category: "JAVA" },
  //   { name: "RST", category: "C++" },
  //   { name: "AXZ", category: "C++" },
  //   { name: "DEF", category: "SpringBoot" }
  // ];
  // const [sportList, setSportList] = useState([]);

  

  // // Add default value on page load
  // useEffect(() => {
  //   setSportList(defaultSports);
  // }, []);

  



  


  //getting data from database

  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");
  //  const [allCategory, setAllCategory] = useState([]);
  //  const [value ,setValue]=useState("");

  // using Async Await
  const getMyPostData = async () => {
    try {
      const res = await Axios.get("http://localhost:8080/getcourse");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  // NOTE:  calling the function
  useEffect(() => {
    getMyPostData();
    
  }, []);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    console.log(selectedCategory)
    event.preventDefault();
  }

  // Function to get filtered list
  function getFilteredList(event) {
   
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return myData;
    }
    return myData.filter((item) => item.course_category === selectedCategory);
   
  }


      // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedCategory, myData]);

  function getcategoryList(event){

      var allCategory= myData.map(element => {<option key={element.id} value={element.course_category} >{element.course_category}</option>})
     console.log("course category:-",allCategory)
      return allCategory;
  }


    return (
       <div class="main-layout inner_page">
         <section className="banner_main fullbg img-fluid">
               <div className="container">
                  <div className="banner_po">
                     <div className="row">
                        <div className="col-md-7">
                        {/* <img src="../assets/images/subjects.jpg" id="right" className="col-md-9" height="500" width="450"/> */}
                           <div className="text_box">

                              
                              <h1 >Subjects

                              </h1>
                              
                              <hr />
                              <br />
                              
                              <h2> <strong> At Online Tuitions, we’ve worked hard to develop a variety of courses and programs to fit everyone’s needs. Whether you want to improve existing skills or expand your horizons, you’ve come to the right place. Check out our course schedule below to see what we have to offer, and contact us today for an introductory session..</strong> </h2>
                              <br />
                              <br />
                              <br />
                             
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
   
       
   

     <div class="container">
  <div class="jumbotron">
    <h1>ALL Courses</h1>
    
  </div>
  
</div>

   
     
     <center>
     {isError !== "" && <h2>{isError}</h2>}
      <div className="filter-container1">
        <div>Select Category:</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            // value={()=>{setValue(value)}}
            onChange={handleCategoryChange}
          >
            
             <option value="">All</option>
             {/* {getcategoryList()} */}
            <option value="java-1">Java-1</option>
            <option value="java-2">Java-2</option>
            <option value="java-3">Java-3</option> 
          </select>
        </div>
      </div>
      
      <div className="sport-list1 ">
        {filteredList.map((element, index) => (
          <Item {...element} key={index} />
        ))}
      </div></center>
      <div  class="gallery">
             <div class="container">
                <div class="row">
                   <div class="col-md-12">
                      <div class="titlepage">
                       
                         
                      </div>
                   </div>
                </div>
                <br/>
                <br/>
                <div class="row">
                   <div class="col-md-4 col-sm-6">
                      <div class="gallery_img">
                         <figure><img src="../assets/images/img1.jpg" alt="#"/></figure>
                      </div>
                   </div>
                   <div class="col-md-4 col-sm-6">
                      <div class="gallery_img">
                         <figure><img src="../assets/images/img8.jpg" alt="#"/></figure>
                      </div>
                   </div>
                   <div class="col-md-4 col-sm-6">
                      <div class="gallery_img">
                         <figure><img src="../assets/images/img2.jpg" alt="#"/></figure>
                      </div>
                   </div>
                  
                </div>
             </div>
          </div>
          
       </div>
    )
  }
  
  export default Courses;