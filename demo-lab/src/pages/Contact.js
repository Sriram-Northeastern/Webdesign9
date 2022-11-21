import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import List from './List';

function Contact(){
    
      const contacts = [
        {
            id: 1,
            name: "Sriram",
            contact: 8573679880
        },
        {
            id: 2,
            name: "Swetha",
            contact:9177046627 
        },
        {
            id: 3,
            name: "Pravallika",
            contact: 9394808918
        }
        
    ];

    return(
      <div>
      <Navbar/>
      <Content title="Contact" content="This is the contact Page"/>
      {contacts.map(contact => (<List
        id = {contact.id}
        name = {contact.name}
        contact = {contact.contact}
      />))}
      </div>
    )
}

export default Contact