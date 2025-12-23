import React from 'react'
import "./stylo.css"
import { useForm } from "./useForm";
import Redes from "./Redes"
import facebookImg from '../../assets/facebook.png';
import youtubeImg from '../../assets/youtobe.jpeg';
import instagramImg from '../../assets/instagram.jpeg';
const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: "",
};

const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.name.trim()) {
        errors.name = "El campo 'Nombre' es requerido";
    } else if (!regexName.test(form.name.trim())) {
        errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
    }

    if (!form.email.trim()) {
        errors.email = "El campo 'Email' es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El campo 'Email' es incorrecto";
    }

    if (!form.subject.trim()) {
        errors.subject = "El campo 'Asunto a tratar' es requerido";
    }

    if (!form.comments.trim()) {
        errors.comments = "El campo 'Comentarios' es requerido";
    } else if (!regexComments.test(form.comments.trim())) {
        errors.comments = "El campo 'Comentarios' no debe exceder los 255 caracteres";
    }

    return errors;
};

const Contacto = () => {
    const {
        form,
        errors,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm(initialForm, validationsForm);

    return (
        <div   className="min-h-screen flex flex-col items-center
                bg-gradient-to-r from-amber-950 via-black to-amber-950 p-4">

            <h2>Formulario de Contacto</h2>
            <form data-aos="fade-down" className='formu' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Escribe tu nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.name}
                    required
                />
                {errors.name && <p>{errors.name}</p>}

                <input
                    type="email"
                    name="email"
                    placeholder="Escribe tu email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.email}
                    required
                />
                {errors.email && <p>{errors.email}</p>}

                <input
                    type="text"
                    name="subject"
                    placeholder="Asunto a tratar"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.subject}
                    required
                />
                {errors.subject && <p>{errors.subject}</p>}

                <textarea
                    name="comments"
                    cols="50"
                    rows="5"
                    placeholder="Escribe tus comentarios"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.comments}
                    required
                ></textarea>
                {errors.comments && <p>{errors.comments}</p>}

                <input className=' border-amber-900 border-1 p-1 bg-gradient-to-r from-black via-amber-800 to-black w-full'  type="submit" value="Enviar" />
            </form>

            {response && <p>Los datos han sido enviados.</p>}
          
            <div className='flex-col'>
                

           
            <ul className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
        <li>
          <Redes
            nombre="Facebook"
            link="https://www.facebook.com/matyuyugioh.yugioh/"
            imagen={facebookImg}
          />
        </li>
        <li>
          <Redes
            nombre="YouTube"
            link="https://www.youtube.com/@imperio_yugioh"
            imagen={youtubeImg}
          />
        </li>
        <li>
          <Redes
            nombre="Instagram"
            link="https://www.instagram.com/imperio_yugioh/"
            imagen={instagramImg}
          />
        </li>
      </ul>
    
          </div>
        </div>
    );
};

export default Contacto;