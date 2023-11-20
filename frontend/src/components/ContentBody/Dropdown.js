import React from "react";

const Dropdown = ({ options, value, onChange }) => {
  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={onChange}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
      <option>Select...</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};


export default Dropdown;



// import React, { useState } from 'react';
// import Select from 'react-select';


// const Dropdown = (props) => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//     setValues(selectedOption);
//   };

//   const setValues = (selectedOption) => {
//     console.log('Selected option:', selectedOption);
//   };

//   return (
//     <div className="relative">
//       <Select
//         id={props.customId}
//         options={props.optionsData}
//         value={selectedOption}
//         onChange={handleChange}
//         placeholder="Select..."
//         className="text-sm rounded outline-none"
//       />
//       <p>Selected option: {selectedOption && selectedOption.label}</p>
//     </div>
//   );
// };

// export default Dropdown;





// import React, { useState } from 'react';
// import Select from 'react-select';

// const Dropdown = (props) => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//     setValues(selectedOption);
//   };

//   const setValues = (selectedOption) => {
//     console.log('Selected option:', selectedOption);
//   };


//   return (
//     <div>
//       <Select
//         id={props.customId}
//         options={props.optionsData}
//         value={selectedOption}
//         onChange={handleChange}
//         placeholder="Select..."
//       />
//       <p>Selected option: {selectedOption && selectedOption.label}</p>
//     </div>
//   );
// };

// export default Dropdown;