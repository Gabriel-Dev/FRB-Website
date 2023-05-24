import { Main } from "./style";
import { Header } from "../../components/header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const Contact = () => {

    const contactSubmit = (data) =>{
      console.log(data)
    }
    
    const { register, handleSubmit, formState: { errors }} = useForm({
        
    })
  return (
    <>
      <Header className="static" />
      <Main>
        <div className="container">
          <div className="text">
            <h2>
                Comece agora a transformação que a sua empresa precisa
            </h2>
            <p>
              Preencha o formulário para que nossos consultores entrem em
              contato.
            </p>
          </div>
          <form onSubmit={handleSubmit(contactSubmit)} noValidate>
            <div>
              <Input
                name="name"
                type="text"
                placeholder="Digite seu nome"
                label="Nome*"
                register={register("name")}
              />


              <Input
                name="email"
                type="email"
                placeholder="Digite seu email"
                label="E-mail*"
                register={register("email")}
              />
            </div>
            <div>
              <Input
                name="tel"
                type="tel"
                placeholder="Digite seu telefone"
                label="Telefone*"
                register={register("tel")}
              />
              <label>Estado*
                <Select register={register("state")}/>
              </label>
            </div>
            <textarea name="description" placeholder="Sobre o que deseja falar?" {...register("description")} ></textarea>
            <div className="buttonBox">
              <Button type="submit" name="Enviar" />
            </div>
          </form>
        </div>
      </Main>
      <Footer />
    </>
  );
};
