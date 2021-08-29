import React from 'react';
import { withRouter } from 'react-router';
import {Prompt} from 'react-router-dom';

import {Formik,Form} from 'formik';
import IssueField from '../Components/IssueField';
import * as Yup from 'yup';

import { useDispatch,useSelector } from 'react-redux';
import { updateIssue } from '../Redux/Actions/IssueActions';

const UpdateIssue = (props) => {
    
    const dispatch = useDispatch();
    const issues = useSelector(state => state.issue.issues);
    const issue = issues.find(issue => issue.id === parseInt(props.match.params.id));

    let formIsHalfFilled;

    const validate = Yup.object({
        description:Yup.string().required('Issue Description is required'),
        
        severity:Yup.string()
        .oneOf(['Critical','Minor','Major'],`Severity should be 'Critical','Minor','Major'`)
        .required('Severity is required'),
        
        status:Yup.string()
        .required('Status is required'),
        
        createdDate:Yup.date()
        .required('createdDate is required'),

        resolvedDate:Yup.date()
        .required('resolvedDate is required')
    });
    
    const submitHandler = (event) => {
        const updatedIssue = {};
        updatedIssue.id = parseInt(props.match.params.id);
        updatedIssue.description = event.description;
        updatedIssue.severity = event.severity;
        updatedIssue.status = event.status;
        updateIssue.views = issue.views;
        updatedIssue.createdDate = event.createdDate;
        updatedIssue.resolvedDate = event.resolvedDate;

        dispatch(updateIssue({issue:updatedIssue}));
    }

    return(
    <React.Fragment>
        <Prompt when={formIsHalfFilled} message="You have unsaved changes,sure You want to leave?"/>

        <h1>Update Page</h1>
        <h2>id: {props.match.params.id}</h2>
        <Formik initialValues={
            {
                description:issue.description,
                severity:issue.severity,
                status:issue.status,
                createdDate:issue.createdDate,
                resolvedDate:issue.resolvedDate
            } }
            validationSchema = {validate}
            onSubmit={async (values)=> {submitHandler(values)}}
        >
           {formik=>{
               let values = Object.values(formik.values);
               formIsHalfFilled = values.filter(val => {return val && val !== ''})?.length>0;

               return(
               <div>
                   <Form>
                        <IssueField label='Description' name='description' type='text' />
                        <IssueField label='Severity' name='severity' type='select' />
                        <IssueField label='Status' name='status' type='radio-button' />
                        <IssueField label='Created Date' name='createdDate' type='date'/>
                        <IssueField label='Resolved Date' name='resolvedDate' type='date'/>
                        <button style={{marginLeft:`1rem`}} type='submit' >Submit</button>
                   </Form>
               </div>
           )} } 
        </Formik>
    </React.Fragment>
    
    )
}

export default withRouter(UpdateIssue);