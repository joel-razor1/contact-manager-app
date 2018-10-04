import React, { Component } from 'react'
import Contacts from './Contacts'
import {Consumer} from '../context'


class Contactsl extends Component {
  render() {



      return(
          <Consumer>
              {value=>{
                  const {contacts}=value;
                return(
                    <React.Fragment>
                        {value.contacts.map(pointme =>(
                        <Contacts key={pointme.id}
                                  pointme={pointme}
                                  
                        />
                        ))}                                )
                    </React.Fragment>
                        );
                        }}
          </Consumer>
      );
  
  }
}

export default  Contactsl; 