
// ProjectDataContext.js
import React, { createContext, useState } from 'react';

const ProjectDataContext = createContext();

const ProjectDataProvider = ({ children }) => {
  const [projectData, setProjectData] = useState({ title: '', link: '' });

  const updateProjectData = (data) => {
    setProjectData(data);
  };

  return (
    <ProjectDataContext.Provider value={{ projectData, updateProjectData }}>
      {children}
    </ProjectDataContext.Provider>
  );
};

export { ProjectDataContext, ProjectDataProvider };









// import React, { createContext, useState } from 'react';

// const FormDataContext = createContext({});

// export const FormDataProvider = ({ children }) => {
//   const [submittedData, setSubmittedData] = useState(null);

//   const submitForm = (data) => {
//     setSubmittedData(data);
//   };

//   const obj = {
//     submitForm,
//     submittedData,
//   }
//   return (
//     <FormDataContext.Provider value={ obj }>
//       {children}
//     </FormDataContext.Provider>
//   );
// };

// export default FormDataContext;

// import React, { createContext, useState } from "react";

// const FormDataContext = createContext();

// const FormDataProvider = ({ children }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     component: "",
//   });

//   const submitForm = (data) => {
//     // Handle form submission logic here
//     console.log("Form submitted:", data);
//   };

//   const updateFormData = (newData) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       ...newData,
//     }));
//   };

//   const value = {
//     formData,
//     submitForm,
//     updateFormData,
//   };

//   return (
//     <FormDataContext.Provider value={value}>
//       {children}
//     </FormDataContext.Provider>
//   );
// };

// export { FormDataContext, FormDataProvider };