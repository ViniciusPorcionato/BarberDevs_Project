import { Input, InputLong } from "./Input"

export const GlobalInput = ({
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    placeholderTextColor,
    secureTextEntry = false
}) => {
    return (
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

export const GlobalInputLong = ({
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    placeholderTextColor,
    secureTextEntry = false
}) => {
    return (
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