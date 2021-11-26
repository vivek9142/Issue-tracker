import React from 'react';
import { withRouter } from 'react-router';
import {Prompt} from 'react-router-dom';

import {Formik,Form} from 'formik';
import IssueField from '../../Components/IssueField/IssueField';
import * as Yup from 'yup';

import { useDispatch,useSelector } from 'react-redux';
import { updateIssue } from '../../Redux/Actions/IssueActions';

const UpdateIssue = (props) => {
    
    const dispatch = useDispatch();
    const issues = useSelector(state => state.issue.issues);
    const issue = issues.find(issue => issue.id === parseInt(props.match.params.id));

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
        updatedIssue.description = event.description;
        updatedIssue.severity = event.severity;
        updatedIssue.status = event.status;
        updateIssue.views = issue.views;
        updatedIssue.createdDate = event.createdDate;
        updatedIssue.resolvedDate = event.resolvedDate;
        updatedIssue.id = issue.id;
        dispatch(updateIssue({id:issue.id,issue:updatedIssue})).then(()=>props.history.push('/'));
    }
    console.log(props.match.params);
    return(
    <React.Fragment>
        
        <div className="container user-section mt-5 mb-3 ">
            <h3 className="text-center">
                Update Issue ID: {props.match.params.id}
            </h3>
            <hr/>
        </div>
        
        <Formik initialValues={
            {
                description:issue.description,
                severity:issue.severity,
                status:issue.status,
                createdDate:issue.createdDate,
                resolvedDate:issue.resolvedDate
            } }
            validationSchema = {validate}
            onSubmit={async (values)=> {submitHandler(values);}}
        >
           {formik=>{
               
               return(
                    <>
                    <Prompt when={formik.dirty} message="You have unsaved changes,sure You want to leave?"/>
                        <div className="container user-section--auth-container">
                            <Form>
                                <div className="row g-3">
                                        <div className="col-12">
                                            <IssueField label='Description' name='description' type='text'/>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <IssueField label='Severity' name='severity' type='select'/>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <IssueField label='Status' name='status' type='radio-button'/>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <IssueField label='Created Date' name='createdDate' type='date'/>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <IssueField label='Resolved Date' name='resolvedDate' type='date'/>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary" style={{'marginBottom':'5rem'}}>Submit</button>
                                        </div>
                                </div>
                            </Form>
                        </div>
                    </>
           )} } 
        </Formik>
    </React.Fragment>
    
    )
}

export default withRouter(UpdateIssue);