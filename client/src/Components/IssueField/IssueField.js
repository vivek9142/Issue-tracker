import React from 'react';
import { useField,ErrorMessage,Field } from 'formik';
const TextField = ({label,type,...props}) => {
    const [field] = useField(props);
    if(type==='text'){
        return(
        <div style={{padding:`1rem`}}>
            <label className='form-label' htmlFor={label}>{label}</label>
            <Field className='form-control' type={type} {...props} />
            <div style={{'height':'1rem'}}>
                <ErrorMessage component='span' name={props.name} style={{'fontSize':'0.8rem',"color":'red'}}/>
                </div>
        </div>
        )
    } else if(type==='select'){
        return (
            <div style={{padding:`1rem`}}>
                <label className='form-label' htmlFor={field.name}>{label}</label>
                <Field  className='form-select' as={type} {...props} >
                    <option value='Select Option'>Select Option</option>
                    <option value='Minor'>Minor</option>
                    <option value='Major'>Major</option>
                    <option value='Critical'>Critical</option>
                </Field>
                <div style={{'height':'1rem'}}>
                <ErrorMessage component='span' name={props.name} style={{'fontSize':'0.8rem',"color":'red'}}/>
                </div>
            </div>
        )
    } else if(type==='radio-button'){

        return (
            <div style={{padding:`1rem`}}>
                <label htmlFor={field.name}>{label}</label>
                <div role='group' className='form-check'  aria-labelledby='my-radio-button' style={{display: `inline-block`}} >
                <div className="form-check form-check-inline" >
                    <Field  className='form-check-input' type='radio' {...field} {...props} value='Open'  />
                    <label className="form-check-label" htmlFor='Open'>Open</label>
                </div>
                
                <div className="form-check form-check-inline">
                    <Field className='form-check-input' type='radio' {...field} {...props} value='In Progress'  />
                    <label className="form-check-label" htmlFor='In Progress'>In Progress</label>
                </div>
                <div className="form-check form-check-inline">
                    <Field className='form-check-input'  type='radio' {...field} {...props} value='Closed'  />
                    <label className="form-check-label" htmlFor='Closed'>Closed</label>
                </div>
                

                <div style={{'height':'1rem'}}>
                    <ErrorMessage component='span' name={props.name} style={{'fontSize':'0.8rem',"color":'red'}}/>
                </div>
                </div>
                
            </div>
        )
    }

    else if(type==='date'){
        return (
            <>
            <label htmlFor={label}>{label}</label>
            <Field className='form-control' type='date' {...field} {...props} />
            <div style={{'height':'1rem'}}>
                <ErrorMessage component='span' name={props.name} style={{'fontSize':'0.8rem',"color":'red'}}/>
                </div>
            </>    
        )
    }


};

export default TextField;