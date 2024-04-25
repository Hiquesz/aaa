import styles from './index.module.css'

interface Props {
    defaultValue: string
    type: 'text' | 'email' | 'number'
    placeHolder: string
}

function InputFatec({defaultValue, type, placeHolder}: Props) {
    return (
        <input 
        className={styles.inputFatec}
        type={type} 
        placeholder={placeHolder}
        defaultValue={defaultValue}
        />
    )
}

export default InputFatec

/*maxWidth={2000} width={100} padding={3} 
                fontSize={12} border={1} borderRadius={5} boxSizing="border-box" size='sm'*/