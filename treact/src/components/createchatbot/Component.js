import React, {useState} from 'react';
import tw, {styled} from 'twin.macro';

import "./styles.css"



// const TextInputType1 = ({
//     label,
//     name,
//     placeholder,
//     value,
//     onChange
// }) => {
//     return (
//         <div>
//             <label htmlFor={name}
//                 className="block font-bold mb-2">
//                 {label} </label>
//             <div style={
//                 {whiteSpace: 'pre-wrap'}
//             }>
//                 <Input type="text"
//                     name={name}
//                     placeholder={placeholder}
//                     value={value}
//                     onChange={onChange}/>
//             </div>
//         </div>
//     );
// };


// const TextInputType2 = ({
//     label,
//     name,
//     placeholder,
//     value,
//     onChange
// }) => {
//     return (
//         <div className="text-input-container">
//             <label htmlFor={name}
//                 className="block font-bold mb-2">
//                 {label} </label>
//             <textarea name={name}
//                 placeholder={placeholder}
//                 value={value}
//                 onChange={onChange}
//                 className="text-input"
//                 style={
//                     {
//                         height: '100px',
//                         resize: 'none',
//                         overflow: 'auto'
//                     }
//                 }/>
//         </div>
//     );
// };


// const TextInputType1 = ({
//     label,
//     name,
//     placeholder,
//     value,
//     onChange
// }) => {
//     return (
//         <div>
//             <label htmlFor={name} className="block font-bold mb-2">
//                 {label}
//             </label>
//             <div style={{ whiteSpace: 'pre-wrap' }}>
//                 <Input
//                     type="text"
//                     name={name}
//                     placeholder={placeholder || ''}
//                     value={value}
//                     onChange={onChange}
//                 />
//             </div>
//         </div>
//     );
// };

// const TextInputType2 = ({
//     label,
//     name,
//     placeholder,
//     value,
//     onChange
// }) => {
//     return (
//         <div className="text-input-container">
//             <label htmlFor={name} className="block font-bold mb-2">
//                 {label}
//             </label>
//             <textarea
//                 name={name}
//                 placeholder={placeholder || ''}
//                 value={value}
//                 onChange={onChange}
//                 className="text-input"
//                 style={{ height: '100px', resize: 'none', overflow: 'auto' }}
//             />
//         </div>
//     );
// };

const TextInputType1 = ({
    label,
    name,
    placeholder,
    value,
    onChange
}) => {
    return (
        <div>
            <label htmlFor={name} className="block font-bold mb-2">
                {label}
            </label>
            <div style={{ whiteSpace: 'pre-wrap' }}>
                <Input
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

const TextInputType2 = ({
    label,
    name,
    placeholder,
    value,
    onChange
}) => {
    return (
        <div className="text-input-container">
            <label htmlFor={name} className="block font-bold mb-2">
                {label}
            </label>
            <textarea
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="text-input"
                style={{ height: '100px', resize: 'none', overflow: 'auto' }}
            />
        </div>
    );
};



// const Input = tw.input `
//   shadow
//   appearance-none
//   border
//   rounded
//   w-full
//   py-2
//   px-3
//   text-gray-700
//   leading-tight
//   focus:outline-none
//   focus:shadow-outline
//   mb-4
// `;

const Input = tw.input`
  shadow
  appearance-none
  border
  rounded
  w-full
  py-2
  px-3
  text-gray-700
  leading-tight
  focus:outline-none
  focus:shadow-outline
  mb-4
  placeholder-black
`;


const UploadButton = ({
    label,
    ...rest
}) => {
    return (
        <div tw="my-4">
            <label tw="block font-bold mb-2"
                htmlFor={
                    rest.id
            }>
                {label} </label>
            <div tw="flex items-center">
                <input type="file" tw="hidden" {...rest}/> {/* <button tw="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={
                        () => rest.click()
                }>
                    Select File
                </button> */}
                {
                rest.files ?. length > 0 && (
                    <span tw="ml-2">
                        {
                        rest.files.length
                    }
                        file{
                        rest.files.length > 1 ? 's' : ''
                    }
                        selected
                    </span>
                )
            } </div>
        </div>
    );
};


export {
    TextInputType1,
    TextInputType2,
    UploadButton
};
