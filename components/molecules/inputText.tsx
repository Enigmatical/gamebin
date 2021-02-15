import { FormGroup, FormLabel, FormControl } from 'react-bootstrap'

type InputTextProps = {
    label: string,
    name: string,
    id?: string,
    touched?: any,
    errors?: any,
    onChange?: Function,
}

const defaultProps: InputTextProps = {
    label: 'label',
    name: 'name',
}

const InputText = ({label, name, touched, errors, onChange, ...props}: InputTextProps) => {
    return (
        <FormGroup controlId={props.id || name}>
            <FormLabel>{label}</FormLabel>
            <FormControl 
                type="text" 
                name={name}
                onChange={({ target: { value }}) => onChange?.(value)}
                isInvalid={touched && !!errors}
                {...props}
            />
            {touched && errors && <div>{errors}</div>}
        </FormGroup>
    )
}

InputText.defaultProps = defaultProps;

export default InputText