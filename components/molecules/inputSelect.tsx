import { FormGroup, FormLabel } from 'react-bootstrap'
import Select from 'react-select'

type InputSelectProps = {
    label: string,
    id?: string,
    name: string,
    options: Array<{ value: string, label: string }>,
    touched?: any,
    errors?: any,
    onChange?: Function,
}

const defaultProps: InputSelectProps = {
    label: 'label',
    name: 'name',
    options: [],
}

const customStyles = {}

const InputSelect = ({ label, name, options, touched, errors, onChange, ...props}: InputSelectProps) => {
    return (
        <FormGroup controlId={props.id || name}>
            <FormLabel>{label}</FormLabel>
            <Select
                inputId={props.id || name }
                instanceId={props.id || name}
                styles={customStyles}
                options={options}
                onChange={({ value }) => onChange?.(value)}
                {...props}
            >
            </Select>
            {touched && errors && <div>{errors}</div>}
        </FormGroup>
    )
}

InputSelect.defaultProps = defaultProps;

export default InputSelect
