import React, { Component } from 'react'
import PropTypes from 'prop-types'
import a from './down.png'
import b from './delete.png'
import {Consumer} from '../context'

 class Contacts extends Component {
   static propTypes={
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
   }
   state={
    showContactInfo:false
   }
   onShowClick=(name,e)=>{
      this.setState({
        showContactInfo:!this.state.showContactInfo
      })
   }
   onDeleteClick=(id,dispatch)=>{
     dispatch({type: 'DELETE_CONTACT', payload: id});
     
   }
  render() {
    const {id, name,email,phone} =this.props.pointme;
    const {showContactInfo}=this.state;
    return (
      <Consumer>
        {value =>{
          const {dispatch}=value;
          return(
            <div className=" card card-body mb-3">
        {/* <h4>{this.props.name}</h4> this code is to be written when there is no destructuring */}
        <h4>{name}
        <img src={a} alt='icon' width='25' height='25' onClick={this.onShowClick.bind(this, name)}/>
        <img src={b} alt='delicon' width='25' height='25' onClick={this.onDeleteClick.bind(this,id,dispatch)} style={{float: 'right'}}/>
        </h4>
        {showContactInfo? <ul className="list-group">
            <li className="list-group-item">
                {/* Email: {this.props.email} this code is to be written when there is no destructuring */}
                Email: {email}
            </li>
            <li className="list-group-item">
                {/* Phone: {this.props.phone}  this code is to be written when there is no destructuring */}
                Phone: {phone}
            </li>
        </ul>: null }
        
      </div>
          )
        }}
      </Consumer>



      
    )
  }
}
// this code should be written if you want the proptypes to be written outside the class 
// Contacts.propTypes={
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired

// }
Contacts.propTypes={
  pointme: PropTypes.object.isRequired, 
  

}
export default Contacts;