import React, {Component} from  'react'
const Context= React.createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.filter(contact=>
                    contact.id!==action.payload)
            };
            default: return state;

    }
};
export class Provider extends Component{
    state={
        contacts:[
            {
                id:1,
                name: "John Doe",
                email: "john@gmail.com",
                phone: "790780079"
            },
            {
                id:2,
                name: "Karen Smith",
                email:"karen@gmail.com",
                phone:"7736628928"
            },
            {
                id:3,
                name: "Felicia",
                email: "feligal@gmail.com",
                phone:"6728902782"
            }
        ],
        dispatch:action=>{
            this.setState(state=>reducer(state,action))
        }
    }
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer= Context.Consumer;