import { useState } from "react"
import { CardHorario } from "../Container/Container"
import { TextoHora } from "../text/text"


export const HoraButton = ({title, clicker, onPress}) => {
    return(
        <CardHorario clickButton={clicker} onPress={onPress}>
            <TextoHora clickButton={clicker}>{title}</TextoHora>
        </CardHorario>
    )
}