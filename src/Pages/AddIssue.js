import React from 'react';
import {Formik,Form} from 'formik';
import IssueField from '../Components/IssueField';

import {useDispatch} from 'react-redux';
import { issueActions } from '../Redux/Reducer/issueReducer';

import * as Yup from 'yup';

const AddIssue = (props) =>{

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        const newIssue = {};
        newIssue.description = event.description;
        newIssue.severity = event.severity;
        newIssue.status = event.status;
        console.log(newIssue);
        dispatch(issueActions.addIssue(newIssue));
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

    return(
    <React.Fragment>
        <h1>Add Issue</h1>
        <Formik initialValues={
            {
                description:'',
                severity:'',
                status:''
            } }
            validationSchema = {validate}
            onSubmit={async (values)=> {onSubmit(values)}}
        >
           {formik=>(
               <div>
                   <Form>
                        <IssueField label='Description' name='description' type='text'/>
                        <IssueField label='Severity' name='severity' type='select'/>
                        <IssueField label='Status' name='status' type='radio-button'/>
                        <button style={{marginLeft:`1rem`}} type='submit' >Submit</button>
                   </Form>
               </div>
           )} 
        </Formik>
    </React.Fragment>
    )
};

export default AddIssue;