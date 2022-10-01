// import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal'
// import Axios from 'axios';

// // const UploadImage = () => {
// //   const [file, setFile] = useState(null);
// //   const [show, setShow] = useState(false);

// //   const teacher=localStorage.getItem('teacherid');
   
    
// //     const handleClose = () => {
       
// //         setShow(false)
// //     };

// //     const handleShow = () =>{ 
     
// //        setShow(true)
// //   };

// //   const postData = async () => {
// //     try{
// //       const fd=new FormData();
// //       fd.append('image',file,file.name)
// //       const res = await Axios.post(`http://localhost:8080/upload2?teacher=${teacher}&file=${fd}`)
// //       if(res.data !== ""){
// //         alert("Image Registered");
// //       }
// //       else {alert("image is not registered")}
// //       }
// //       catch (err){
// //         console.log(err)
// //       }
// //    }
  

// //   const fileHandler = event => {
// //     console.log(event.target.files[0]);
// //     let reader = new FileReader();
// //     reader.onload = function(e) {
// //       setFile(e.target.result);
// //     };
// //     reader.readAsDataURL(event.target.files[0]);
// //   };

// //   return (
// //     <div className="addNew">
// //       <img src={file} alt={""} />
      
// //       <Button variant="primary" onClick={handleShow}>
// //       Click Here to Upload profile pic
// //       </Button>

// //       <Modal show={show} onHide={handleClose} > 
// //         <Modal.Header closeButton>
// //           <Modal.Title></Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body>Upload Profile image</Modal.Body>
// //         <Modal.Footer>
// //         <input type="file" onChange={fileHandler} />
// //           <Button variant="secondary" onClick={handleClose}>
// //             Cancel
// //           </Button>
// //           <Button variant="primary" onClick={postData}>
// //             Confirm
// //           </Button>
// //         </Modal.Footer>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default UploadImage;

 
// class UploadImage extends React.Component{
 
//       const [file, setFile] = useState();
//       const [fileName, setFileName] = useState("");
 
//       const saveFile = (e) => {
//         setFile(e.target.files[0]);
//         setFileName(e.target.files[0].name);
//       };
 
//       const uploadFile = async (e) => {
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("fileName", fileName);
//         try {
//           const res = await Axios.post(
//             "http://localhost:3000/upload",
//             formData
//           );
//           console.log(res);
//         } catch (ex) {
//           console.log(ex);
//         }
//       };
 
//     render(){
//       return (
//         <div className="App">
//           <input type="file" onChange={saveFile} />
//           <button onClick={uploadFile}>Upload</button>
//         </div>
//       );
//     }
// }
 
// export default UploadImage;