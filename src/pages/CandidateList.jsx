import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import CandidateService from '../services/candidateService'


export default function CandidateList() {

    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getCandidates().then(result=> setCandidates(result.data.data))
     },[])
    return (
        <div>
          <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>İdentity Number</Table.HeaderCell>
        <Table.HeaderCell>Birth Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     
          {
              candidates.map(candidate=>
                 <Table.Row key= {candidate.id}>
       
        <Table.Cell>{candidate.first_name}</Table.Cell>
        <Table.Cell>{candidate.last_name}</Table.Cell>
        <Table.Cell>{candidate.identity_number}</Table.Cell>
        <Table.Cell>{candidate.birth_date}</Table.Cell>
         </Table.Row>
                )
          }
      
     </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>

        </div>
    )
}
