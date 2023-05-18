import { Main } from "./style";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { Button } from "../../components/button"

export const Contact = () => {
    return (
        <>
            <Header />
            <Main>
                <Input name="email" type="text" placeholder="Digite seu email"
                    label="Email"/>
                <Button type="button" name="Enviar"/>
            </Main>
            <Footer/>
        </>
    )
}