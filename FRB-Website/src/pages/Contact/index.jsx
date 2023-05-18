import { Main } from "./style";
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { Select } from "../../components/select"

export const Contact = () => {
    return (
        <>
            <Header />
            <Main>
                <div className="container">
                    <div className="text">
                        <h2>Comece agora a transformação que a sua empresa precisa</h2>
                        <p>Preencha o formulário para que nossos consultores entrem em contato.</p>
                    </div>
                    <form>
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