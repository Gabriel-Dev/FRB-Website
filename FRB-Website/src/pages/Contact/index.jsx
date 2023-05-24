import { Main } from "./style";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Select } from "../../components/Select"

export const Contact = () => {

const teste = (e) =>{

console.log(e)
}
    return (
        <>
            <Header className="static"/>
            <Main>
                <div className="container">
                    <div className="text">
                        <h2>Comece agora a transformação que a sua empresa precisa</h2>
                        <p>Preencha o formulário para que nossos consultores entrem em contato.</p>
                    </div>
                    <form onSubmit={teste}>
                        <div>
                            <Input name="Nome" type="text" placeholder="Digite seu nome"
                            label="Nome*"/>

                            <Input name="E-mail" type="email" placeholder="Digite seu email"
                            label="E-mail*"/>
                        </div>
                        <div>
                            <Input name="Telefone" type="tel" placeholder="Digite seu telefone"
                            label="Telefone*"/>
                            <label> Estado*
                                <Select/>
                            </label>
                        </div>
                        <textarea placeholder="Sobre o que deseja falar?"></textarea>
                        <div className="buttonBox" >
                            <Button type="submit" name="Enviar"/>
                        </div>
                    </form>
                </div>
            </Main>
            <Footer/>
        </>
    )
}