import React from 'react'
import { Button, Container,  Menu } from 'semantic-ui-react'
export default function Navi() {
    return (
        <div>
               <Menu inverted  fixed="top">
           <Container>
        <Menu.Item
          name='HRMS' >
        
         </Menu.Item>

     

        <Menu.Menu position='right'>
           <Menu.Item>
        <Button primary>Sign Up</Button>
        </Menu.Item>
       

          <Menu.Item>
            <Button primary>Login</Button>
          </Menu.Item>

          <Menu.Item>

            İşverenler/İş İlanı Ver
          </Menu.Item>
        </Menu.Menu>
        </Container>
      </Menu>
        </div>
    )
}
