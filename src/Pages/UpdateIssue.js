import React from 'react';
import { withRouter } from 'react-router';
import {Formik,Form} from 'formik';
import IssueField from '../Components/IssueField';
import * as Yup from 'yup';

import { useDispatch,useSelector } from 'react-redux';
import { updateIssue } from '../Redux/Reducer/issueReducer';

const UpdateIssue = (props) => {
    const submitHandler = (event) => {
        const updatedIssue = {};
        updatedIssue.id = parseInt(props.match.params.id);
        updatedIssue.description = event.description;
        updatedIssue.severity = event.severity;
        updatedIssue.status = event.status;
        console.log(updatedIssue);
        dispatch(updateIssue({issue:updatedIssue}));
        props.history.push('/');
    }

    const validate = Yup.object({
        description:Yup.string().required('Issue Description is required'),
        
        severity:Yup.string()
        .oneOf(['Critical','Minor','Major'],`Severity should be 'Critical','Minor','Major'`)
        .required('Severity is required'),
        
        status:Yup.string()
        .required('Status is required')
    });
    const dispatch = useDispatch();
    const issues = useSelector(state => state.issue.issues);
    const issue = issues.find(issue => issue.id === parseInt(props.match.params.id));

    return(
    <React.Fragment>
        <h1>Update Page</h1>
        <h2>id: {props.match.params.id}</h2>
        <Formik initialValues={
            {
                description:issue.description,
                severity:issue.severity,
                status:issue.status
            } }
            validationSchema = {validate}
            onSubmit={async (values)=> {submitHandler(values)}}
        >
           {formik=>(
               <div>
                   <Form>
                        <IssueField label='Description' name='description' type='text' />
                        <IssueField label='Severity' name='severity' type='select' />
                        <IssueField label='Status' name='status' type='radio-button' />
                        <button style={{marginLeft:`1rem`}} type='submit' >Submit</button>
                   </Form>
               </div>
           ) } 
        </Formik>
    </React.Fragment>
    
    )
}

export default withRouter(UpdateIssue);