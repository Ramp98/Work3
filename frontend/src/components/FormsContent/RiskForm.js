import React, { useState,useEffect } from 'react';
import Dropdown from '../ContentBody/Dropdown';
import Button from '../ContentBody/Button';


const ButtonClassName = "text-gray-200 text-xs gap-x-4 cursor-pointer pt-1.5 pb-1.5 pl-2 pr-2 font-bold hover:bg-gray-300 hover:text-black rounded-md bg-gray-700 duration-300 mt-6 mb-6"
const FontAwesome="fa-regular fa-thumbs-up fa-sm mr-1";

const result=[];

const riskIdentification={
    source:"",
    category:"",
    relation:"",
    description:"",
    trigger:"",
    impactDescription:"",
    control:"",
    suspect:"",
    occurence:"",
    impact:""
}

const sourceOptions=[
   "Internal",
   "External"
]




const categoryOptions = [
  "Technical",
  "Environment",
  "Quality",
  "Performance",
  "Regulations & Legal",
  "Organizational",
  "Project Management",
  "External",
  "Hazard"
]


const relationOptions = [
  "Organizational",
  "Bids & Proposal",
  "OPD",
  "PPQA",
  "OPP",
  "Measurement",
  "Improvement Management",
  "Customer Satisfaction",
  "Resource Planning & Allocation",
  "FOD",
  "Project Initiation",
  "Project Planning",
  "Project Monitoring & Control",
  "Configuration Management",
  "QPM",
  "CAR",
  "DAR",
  "Risk Management",
  "Project Closure",
  "Customer Requirement Capture",
  "Customer Requirement Mgmt",
  "Sys Design & Development",
  "Hardware design & development",
  "Mech. Design & Development",
  "Software Design & Dev.",
  "Customer Requirement Capture",
  "SQA",
  "DFM",
  "Process Engineering",
  "PPC",
  "Module Assembly",
  "PCB Assembly",
  "Cable/Harness Assembly",
  "Proto Shop",
  "Production testing",
  "HQA",
  "System Integration",
  "Build to print",
  "Customer Support",
  "Control of Monitoring & Measuring instruments",
  "Control of customer supplied property_FIM",
  "FAI",
  "Stamp Issuance-Usage-Maintenance",
  "Purchase",
  "Sub-Contract/Outsource",
  "Stores",
  "Training",
  "Finance",
  "Supplier Registration",
  "FAI",
  "Supplier Performance Review",
  "Special Requirements",
  "Environment"
];

const suspectOptions =[
  "Cost",
  "Quality",
  "Schedule",
  "Health",
  "Safety"
]

const occurenceOptions =[
  "Very Low",
  "Low",
  "Medium",
  "High",
  "Very High"
]

const impactOptions =[
  "Very Low",
  "Low",
  "Medium",
  "High",
  "Very High"
]
 


const RiskForm = () => {
  
  
  const [formData, setFormData] = useState(riskIdentification);
  const [categ,setCategory] = useState("");
  const [s,setSource]= useState("");
  const [description,setDescription] = useState("");
  const [relation,setRelation] = useState("");
  const [trigger,setTrigger] = useState("");
  const [impactDescription,setImpactDescription] = useState("");
  const [control,setControl] = useState("");
  const [suspect,setSuspect] = useState("");
  const [occurence,setOccurence] = useState("");
  const [impact,setImpact] = useState("");
  // const handleChange = (e) => {
  //   console.log(e.target.name);
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const sourceChangeHandler =(e)=>{
    setSource(e.target.value);
  }


  const categoryChangeHandler =(e)=>{
    setCategory(e.target.value);
  }

  const descriptionChangeHandler =(e)=>{
    setDescription(e.target.value);
  }

  const relationChangeHandler =(e)=>{
    setRelation(e.target.value);
  }

  const triggerChangeHandler =(e)=>{
    setTrigger(e.target.value);
  }

  const impactDescriptionChangeHandler =(e)=>{
    setImpactDescription(e.target.value);
  }

  const controlChangeHandler =(e)=>{
    setControl(e.target.value);
  }

  const suspectChangeHandler =(e)=>{
    setSuspect(e.target.value);
  }

  const occurenceChangeHandler =(e)=>{
    setOccurence(e.target.value);
  }

  const impactChangeHandler =(e)=>{
    setImpact(e.target.value);
  } 


  // const handleDropdownChange = (selectedOption, field) => {
  //   setFormData({ ...formData, [field]: selectedOption ? selectedOption.value : '' });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    setFormData({
      source:s,
      category:categ,
      relation:relation,
      description:description,
      trigger:trigger,
      impactDescription:impactDescription,
      control:control,
      suspect:suspect,
      occurence:occurence,
      impact:impact
    }
    );
    result.push(formData);
    setCategory("");
    setDescription("");
    setRelation("");
    setSource("");
    setTrigger("");
    setImpactDescription("");
    setControl("");
    setOccurence("");
    setSuspect("");
    setImpact("");
  };
  
  useEffect(() => {
    console.log(formData);
  }, [formData]);


  console.log(result);

  return (
    <div className="m-4 w-85 h-full shadow-md shadow-gray-200 rounded-xl bg-white">
     <h3 className="text-[1rem] font-bold p-4 pb-0 ">Add Risk Info</h3>
    <form onSubmit={handleSubmit} className='text-sm m-4'>
      <div className='mt-1 flex flex-col'>
      <label className="font-bold" htmlFor="source">Select a source</label>
        {/* <input
          type="text"
          name="source"
          value={formData.name}
          onChange={handleChange}
        />
        <Select options={categoryOptions} onChange={(values) => this.setValues(values)} /> */}
        <Dropdown
        //  customId="sourceDropdown"
         value={s}
         options={sourceOptions}
         onChange={sourceChangeHandler}
        />
      </div>
      <div className='mt-6 flex flex-col'>
        <label className="font-bold" htmlFor="category">Select a category</label>
        <Dropdown
        //  customId="categoryDropdown"
         value={categ}
         options={categoryOptions}
         onChange={categoryChangeHandler}
        />
  
      </div>
      <div className='mt-6 flex flex-col'>
        <label className="font-bold" htmlFor="relation">Select a Relation:</label>
        <Dropdown
        //  customId="relationDropdown"
         value={relation}
         options={relationOptions}
         onChange={relationChangeHandler}
        />
  
      </div>
      <div className='mt-6 flex flex-col'>
        <label className="font-bold" htmlFor="description">Risk description</label>
        <textarea
          className='h-20 border border-gray-400 rounded resize-none'
          name="description"
          value={description}
          onChange={descriptionChangeHandler}
        ></textarea>
      </div>
      <div className='mt-6 flex flex-col'>
        <label className="font-bold" htmlFor="trigger">Trigger</label>
        <textarea
          className='h-20 border border-gray-400 rounded resize-none'
          name="trigger"
          value={trigger}
          onChange={triggerChangeHandler}
        ></textarea>
      </div>
      <div className='mt-6 flex flex-col'>
        <label className="font-bold" htmlFor="impactDescription">Impact Description</label>
        <textarea
          className='h-18 border border-gray-400 rounded resize-none'
          name="impactDescription"
          value={impactDescription}
          onChange={impactDescriptionChangeHandler}
        ></textarea>
      </div>
      <div className='mt-6 flex flex-col'>
        <label className="font-bold" htmlFor="control">Existing controls</label>
        <textarea
          className='h-18 border border-gray-400 rounded resize-none'
          name="control"
          value={control}
          onChange={controlChangeHandler}
        ></textarea>
      </div>
      <div className='mt-6 flex flex-col'>
        <label className="font-bold" htmlFor="suspect">Impact On</label>
        <Dropdown
         value={suspect}
         options={suspectOptions}
         onChange={suspectChangeHandler}
        />
      </div>
      <div className='mt-6 flex flex-col'>
        <label className="font-bold" htmlFor="occurence">Probability of Occurence</label>
        <Dropdown
         value={occurence}
         options={occurenceOptions}
         onChange={occurenceChangeHandler}
        />
      </div>
      <div className='mt-6 flex flex-col'>
        <label className="font-bold" htmlFor="impact">Impact</label>
        <Dropdown
         value={impact}
         options={impactOptions}
         onChange={impactChangeHandler}
        />
      </div>
      <Button customClasses={ButtonClassName} iconClasses={FontAwesome} type="submit" text="Submit" />
    </form>
    </div>
  );
};

export default RiskForm;