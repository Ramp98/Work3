import React, { useState } from 'react';
// import Dropdown from './Dropdown';


// const riskIdentification={
//     source:"",
//     category:"",
//     relation:"",
//     description:""
// }

// const sourceOptions = [
//    { 
//      value: 1,
//      label: "Internal"
//    },
//    {
//      value:  2,
//      label: "External"
//    }
//  ];
 
 


// const Form = () => {
//   const [formData, setFormData] = useState(riskIdentification);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.source]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     console.log(formData); 
//     setFormData(riskIdentification); 
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="source">Select a Source:</label>
//         {/* <input
//           type="text"
//           name="source"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <Select options={categoryOptions} onChange={(values) => this.setValues(values)} /> */}
//         <Dropdown
//          customId="sourceDropdown"
//          optionsData={sourceOptions}
//         />
//       </div>
//       <div>
//         <label htmlFor="category">Select a category</label>
//         <Dropdown
//          customId="categoryDropdown"
//          optionsData={sourceOptions}
//         />
//         {/* <textarea
//           name="category"
//           value={formData.message}
//           onChange={handleChange}
//         ></textarea> */}
//       </div>
//       <div>
//         <label htmlFor="relation">Select a Relation:</label>
//         <Dropdown
//          customId="relationDropdown"
//          optionsData={sourceOptions}
//         />
//         {/* <textarea
//           name="relation"
//           value={formData.message}
//           onChange={handleChange}
//         ></textarea> */}
//       </div>
//       <div>
//         <label htmlFor="description">Select a Description:</label>
//         {/* <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//         ></textarea> */}
//         <Dropdown
//          customId="descriptionDropdown"
//          optionsData={sourceOptions}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form;



const CustomForm = ({ fields, onSubmit, props }) => {
   const [formValues, setFormValues] = useState({});
 
   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormValues((prevState) => ({
       ...prevState,
       [name]: value,
     }));
   };
 
   const handleSubmit = (e) => {
     e.preventDefault();
     onSubmit(formValues);
   };
 
   return (
     <form onSubmit={handleSubmit}>
       {/* {fields.map((field) => (
         <div key={field.name}>
           <label>{field.label}</label>
            {props.children}
         </div>
       ))} */}
        <div>
            {props.children}
         </div>
       <button type="submit">Submit</button>
     </form>
   );
 };

 export default CustomForm;