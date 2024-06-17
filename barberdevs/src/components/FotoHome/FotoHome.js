import { ContainerFoto } from "../Container/Container"
import { ImgCarousel } from "../logo/logo"

export const FotoHome = (imgLocal) => {
    return(
        <ContainerFoto>
            <ImgCarousel source={require("./../../assets/img/img-carousel-2.jpg")}/> 
        </ContainerFoto>
    )
}