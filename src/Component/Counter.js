import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

const Counter = (props) => {
    const increment = () => {
        props.dispatch({ type: "INCREMENT" });
      };
     
      const decrement = () => {
        props.dispatch({ type: "DECREMENT" });
      };
  
      const reset = () => {
          props.dispatch({ type: "RESET" });
        };
    return (
        <div className="counter">
       <h2>Counter</h2>
       <div>
       <Button variant="outline-primary" onClick={() =>decrement()}>-</Button>{' '}
         
         <span className="count">{props.count}</span>
         <Button variant="outline-primary" onClick={() =>increment()}>+</Button>{' '}
        
       </div>
       <Button as="input" type="reset" value="Reset" onClick={() =>reset()} />
       
     </div>
    )
}

const mapStateToProps = state => {
    return {
      count: state.count
    };
   };
   
   export default connect(mapStateToProps)(Counter);
