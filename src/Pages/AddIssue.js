import React from 'react';
import {Formik,Form} from 'formik';
import IssueField from '../Components/IssueField';
import {Prompt} from 'react-router-dom'; 
import {useDispatch} from 'react-redux';
import { addIssue } from '../Redux/Actions/IssueActions';

import * as Yup from 'yup';

const AddIssue = (props) =>{

    const dispatch = useDispatch();
    let formIsHalfFilled ;

    const onSubmit = (event) => {
        const newIssue = {};
        newIssue.views=0;
        newIssue.description = event.description;
        newIssue.severity = event.severity;
        newIssue.status = event.status;
        newIssue.createdDate = event.createdDate;
        newIssue.resolvedDate = event.resolvedDate;
        dispatch(addIssue(newIssue)).then((res)=>{
            // if(res.type.indexOf('fulfilled') !== -1) 
                
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
        <Prompt when={formIsHalfFilled} message="You have unsaved changes,sure You want to leave?"/>
        
        <h1>Add Issue</h1>

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
               formIsHalfFilled = values.filter(val => {return val && val !== ''}).length>0;
               return(
               <div>
                   <Form>
                        <IssueField label='Description' name='description' type='text'/>
                        <IssueField label='Severity' name='severity' type='select'/>
                        <IssueField label='Status' name='status' type='radio-button'/>
                        <IssueField label='Created Date' name='createdDate' type='date'/>
                        <IssueField label='Resolved Date' name='resolvedDate' type='date'/>
                        <button style={{marginLeft:`1rem`}} type='submit' >Submit</button>
                   </Form>
               </div>
           )}} 
        </Formik>
    </React.Fragment>
    )
};

export default AddIssue;