import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Sidebar() {
    return (
        <div>
         
            <Menu pointing vertical>
        <Menu.Item
          name='Employer'
        
        />
        <Menu.Item
          name='Employee'
         
        />
        <Menu.Item
          name='Candidate'
        
        />
      
      
      <Menu.Item
          name='Job Position'
        
        />
      </Menu>
        </div>
    )
}
