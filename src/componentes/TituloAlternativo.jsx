import { Titulo } from "./Titulo"

export const TituloAlternativo = ({ condicion }) => {
    if (condicion) {
        return <Titulo titulo={"Titulo alterno"} />
    }
    return <Titulo titulo={"Titulo original"} />
}