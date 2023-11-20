//imp
import React,{useState,useContext,useEffect} from "react";
import Button from "../components/ContentBody/Button";
import RiskLayout from "../pages/RiskLayout";
import { Link,useNavigate } from "react-router-dom";
import ProjectContext from "../components/Context/FormDataContext";
import FormDataContext from "../components/Context/FormDataContext";
// import { FormDataProvider } from "../components/Context/FormDataContext";
import { ProjectDataContext } from "../components/Context/FormDataContext";

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { FormDataContext } from "../components/Context/FormDataProvider";



//imp
const data={
    title:"",
    component:"",
}

//imp
const dropdownData=[];

const iconClasses1="fa-regular fa-arrow-left";
const iconClasses2="fa-regular fa-xmark";



export default function CreateProject(){
    
    // const templates=[
    //     {    
    //       component:<RiskLayout projectName={projectName}/>,
    //       link:"/risk",
    //     }
    //  ]

//imp
    const { projectData, updateProjectData } = useContext(ProjectDataContext);
     const [formData, setFormData] = useState(data);

    //  const { submitForm } = useContext(FormDataContext);     
     const[projectName,setProject] = useState("");
     const[template,setTemplate] = useState("");

  //imp
     const templates=[
        { 
          title:"Risk Template",    
          component:<RiskLayout projectName={projectName}/>,
          link:"/risk",
        },
        {
          title:"Another One",
          component:<RiskLayout projectName={projectName}/>,
          link:"/risk",
        }
     ]
    

    // const { formData, updateFormData, submitForm } = useContext(FormDataContext);

    // const handleProjectChange = (e) => {
    //   updateFormData({ title: e.target.value });
    // };
  
    // const handleTemplateSelect = (templateName) => {
    //   updateFormData({ component: templateName });
    //   console.log(templateName);
    // };
  
    // const createProject = (e) => {
    //   e.preventDefault();
    //   submitForm(formData);
    // };

    const navigate = useNavigate();
    
     const goback=()=>{
       navigate(-1);
     }
    

     // const handleClick = () => {
    //   navigate('../');
    // };



//  Imp
     const handleProjectChange = (e) =>{
         setProject(e.target.value);
     }  

     const handleTemplateSelect = (templateName) =>{
         setTemplate(templateName);
         console.log(templateName);
     }

     const createProject = (e) =>{
        e.preventDefault();
        setFormData({
            title:projectName,
            component:template,
       });


       updateProjectData({
        title: projectName,
        link: template,
      });   
  
        console.log('createProject function is triggered!');

        // const newFormData = {
        //   title: projectName,
        //   component: template,
        //   link: '',
        // };
        dropdownData.push(formData);
        console.log(dropdownData);
        console.log(formData);
        // submitForm(formData);
        // if(projectName && template){
            setProject("");
            setTemplate("");
        // }
     }

    //  useEffect(() => {
    //   console.log(formData);
    // }, [formData]);  


     console.log(projectData);

     return(
       <>
       {/* <ProjectContext> */}
       <div className="flex flex-col">
       <div className="flex flex-row justify-between m-3">
       <button onClick={goback}>
       <i class="fa-solid fa-arrow-left"></i>
       </button>
       <button onClick={goback}>
       <button><i class="fa-solid fa-xmark"></i></button>
        </button>
       </div>
       {/* <div className="flex flex-row items-center h-screen justify-between m-3">
          <button><i class="fa-solid fa-arrow-left"></i></button>
           <button><i class="fa-solid fa-xmark"></i></button> */}
       <form className="flex flex-col justify-center items-center mt-[6.5rem]" onSubmit={createProject}>      
       <h2 className="text-[1.7rem] flex justify-center items-center mb-[2.1rem] font-thin">Create a new Project</h2>
        <div className="flex flex-col justify-center items-center">
        <input
            className="w-[18rem] mb-[1.25rem] p-3"
            type="text"
            value={projectName}
            onChange={handleProjectChange}
            placeholder="Enter Project Name" 
        />
        <ul className="flex flex-row justify-center">
            <li className="bg-gray-800 w-[8.3rem] h-[8.4rem] text-center text-gray-300 pt-[3.2rem] pl-2 pr-2 ml-2 mt-4 rounded-md">Risk</li>
            <li className="bg-slate-800 w-[8.3rem] h-[8.4rem] text-center text-gray-300 pt-[3.2rem] pl-2 pr-2 ml-9 mt-4 rounded-md">Risk</li>
            {templates.length > 0 &&
              templates.map((template, index) => (
                <li
                  className="bg-gray-800 w-[8.3rem] h-[8.4rem] text-center text-gray-300 pt-[2.6rem] pl-4 pr-4 ml-9 mt-4 rounded-md cursor-pointer hover:shadow-xl"
                  key={index}
                  onClick={() => handleTemplateSelect(template)}
                >
                  {template.title}
                </li>
              ))}
          </ul>
        {/* <Link to="/"> */}
          <button className="mt-10 cursor-pointer font-semibold" type = "submit" onClick={createProject} >
            <Link to="/">
            Create Project
            </Link>
          </button>
        {/* </Link> */}
        </div>
      </form>
    </div>
      {/* </div> */}
    {/* </ProjectContext>   */}
       </>
    )
}