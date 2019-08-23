import React from 'react';
function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email} // props from parent
        onChange={props.handleChange} // props from parent
        />
    </div>
  )
}
export default Step2;