import React from 'react';
import {Formik,Form} from 'formik';
import IssueField from '../../Components/IssueField/IssueField';
import {Prompt} from 'react-router-dom'; 
import {useDispatch} from 'react-redux';
import { addIssue } from '../../Redux/Actions/IssueActions';

import * as Yup from 'yup';

const AddIssue = (props) =>{
    let formIsHalfFilled;

    const dispatch = useDispatch();
    

    const onSubmit = (event) => {
        const newIssue = {};
        newIssue.views=0;
        newIssue.description = event.description;
        newIssue.severity = event.severity;
        newIssue.status = event.status;
        newIssue.createdDate = event.createdDate;
        newIssue.resolvedDate = event.resolvedDate;
        newIssue.id=Math.floor(Math.random()*1000);
        dispatch(addIssue(newIssue)).then((res)=>{
            props.history.push('/');  
        });
    }

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

    return(
    <React.Fragment>

        
        
        <div className="container user-section mt-5 mb-3 ">
            <h3 className="text-center">
                Add Issue
            </h3>
            <hr/>
        </div>

        <Formik initialValues={
            {
                description:'',
                severity:'',
                status:'',
                createdDate:'',
                resolvedDate:''
            } }
            validationSchema = {validate}
            onSubmit={async (values)=> onSubmit(values)}
        >
           {formik=>{
               let values = Object.values(formik.values);
               formIsHalfFilled = values.filter(val => {return val && val !== ''});
               formIsHalfFilled = formIsHalfFilled.length>0 && formIsHalfFilled.length<5;
               
               return(
                   <>
                    <Prompt when={formIsHalfFilled} message="You have unsaved changes,sure You want to leave?"/>
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

                                        <div className="col-12" style={{'marginBottom':'5rem'}}>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                </div>
                            </Form>
                    </div>
                </>
           )}} 
        </Formik>
    </React.Fragment>
    )
};

export default AddIssue;