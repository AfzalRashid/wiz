import React from 'react';
function Step3(props) {
  if (props.currentStep !==3) {
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
        <button >Sign up</button>
    </div>
  )
}
export default Step3;