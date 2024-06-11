import { Input, InputLong } from "./InputStyles"

export const InputBox = ({
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    placeholderTextColor,
    secureTextEntry = false
}) => {
    return(
        <Input
        placeholder={placeholder}
        keyboardType={keyType}
        value={fieldValue}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        />
    )
}

export const InputBoxLong = ({
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    placeholderTextColor,
    secureTextEntry = false
}) => {
    return(
        <InputLong
        placeholder={placeholder}
        keyboardType={keyType}
        value={fieldValue}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        />
    )
}

