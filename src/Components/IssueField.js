import React from 'react';
import { useField,ErrorMessage,Field } from 'formik';
const TextField = ({label,type,...props}) => {
    const [field] = useField(props);
    if(type==='text'){
        return(
        <div style={{padding:`1rem`}}>
            <label htmlFor={label}>{label}</label>
            <Field  type={type} {...props} />
            <ErrorMessage className='error' component='span' name={field.name}/>
        </div>
        )
    } else if(type==='select'){
        return (
            <div style={{padding:`1rem`}}>
                <label htmlFor={field.name}>{label}</label>
                <Field  as={type} {...props} >
                    <option value='Select Option'>Select Option</option>
                    <option value='Minor'>Minor</option>
                    <option value='Major'>Major</option>
                    <option value='Critical'>Critical</option>
                </Field>
                <ErrorMessage className='error' component='span' name={field.name}/>
            </div>
        )
    } else if(type==='radio-button'){

        return (
            <div style={{padding:`1rem`}}>
                <label htmlFor={field.name}>{label}</label>
                <div role='group' aria-labelledby='my-radio-button' style={{display: `inline-block`}} >
                <label htmlFor='Open'>
                <Field  type='radio' {...field} {...props} value='Open'  />Open</label>

                <label htmlFor='In Progress'>
                <Field  type='radio' {...field} {...props} value='In Progress'  />In Progress</label>
                
                <label htmlFor='Closed'>
                <Field  type='radio' {...field} {...props} value='Closed'  />Closed</label>
                <ErrorMessage className='error' component='span' name={field.name}/>
                </div>
                
            </div>
        )
    }

    else if(type==='date'){
        return (
            <label htmlFor={label}>{label}
            <Field  type='date' {...field} {...props} />
            {/* // <input type="date" name='createdDate' /> */}
            <ErrorMessage className='error' component='span' name={field.name}/>
            </label>
        )
    }


};

export default TextField;