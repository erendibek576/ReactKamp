import React from 'react'
import './Section.css';
import { Grid } from "semantic-ui-react";

import EmployerList from '../pages/EmployerList'
import EmployeeList from '../pages/EmployeeList'
import CandidateList from '../pages/CandidateList';
import JobPositionList from '../pages/JobPositionList';

export default function Section() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                    <h2>Employer</h2> 
                   
                      <EmployerList />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    <h2>  Employee  </h2>
                       <EmployeeList />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                     <h2>   Candidate </h2>
                       <CandidateList />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                     <h2>   Job Position </h2>
                        <JobPositionList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
