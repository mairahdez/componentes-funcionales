//Las importaciones de React se utilizan para gestionar el estado y los efectos secundarios en componentes funcionales, 
//mientras que las importaciones de Material-UI se utilizan para acceder a componentes de interfaz de usuario preestilizados y funcionales que siguen el diseño de Material Design. 
//Ambas bibliotecas son comunes en el desarrollo de aplicaciones web modernas y se pueden utilizar juntas para construir interfaces de usuario atractivas y dinámicas.
import { useState } from "react";  // Importa la función useState de React
import { Button } from "@mui/material";  // Importa el componente Button de Material-UI
import { TextField } from '@mui/material';  // Importa el componente TextField de Material-UI
import { Switch } from "@mui/material";  // Importa el componente Switch de Material-UI
import FormGroup from '@mui/material/FormGroup';  // Importa el componente FormGroup de Material-UI
import FormControlLabel from '@mui/material/FormControlLabel';  // Importa el componente FormControlLabel de Material-UI

// Definición de un componente de React llamado FormSignUp
function FormSignUp({ handleSubmit }) {
    // Declaración de múltiples estados usando useState
    const [name, setName] = useState('');  // Estado para el nombre
    const [lastName, setLastName] = useState('');  // Estado para el apellido
    const [email, setEmail] = useState('');  // Estado para el correo electrónico
    const [prom, setProm ] = useState(true);  // Estado para la opción de promociones (inicializado como verdadero)
    const [nov, setNov ] = useState(false);  // Estado para la opción de novedades (inicializado como falso)

    // Estado para los errores (inicializado con un objeto que contiene el error para el nombre y un mensaje)
    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: 'Deben ser al menos tres caracteres'
        }
    })

    // Función para validar el nombre
    function validarNombre(nombre){
        if(nombre.length >= 3){
            return { 
                name: { 
                    error: false,
                    message: "",
                }, 
            }    
        } else { 
            return { 
                name: {
                    error: true, 
                    message: "Deben ser al menos tres caracteres", 
                },
            }
        }
    }

    // Renderización del formulario y sus componentes
    return (
        <form 
            onSubmit={(e) => { 
                e.preventDefault()
                handleSubmit({
                    name,
                    lastName,
                    email,
                    prom,
                    nov,
                })
            }}
        >
            {/* Componente TextField para el nombre */}
            <TextField 
                id="name"
                label="Nombre"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => 
                    setName(e.target.value)
                }
                value={name}
                error={ errors.name.error }
                helperText={ errors.name.error 
                    ? errors.name.message 
                    : '' } 
                onBlur={(e) => {
                    // Validación del nombre al perder el foco del campo
                    setErrors(validarNombre(
                        e.target.value
                    ))
                }}
            />

            {/* Componente TextField para los apellidos */}
            <TextField 
                id="lastName"
                label="Apellidos"
                variant="outlined"
                fullWidth
                margin="normal"
                value={lastName}
                onChange={(e) => 
                    setLastName(e.target.value)
                }
            />

            {/* Componente TextField para el correo electrónico */}
            <TextField 
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => 
                    setEmail(e.target.value)
                }
            />

            {/* Grupo de componentes Switch para las opciones de promociones y novedades */}
            <FormGroup>
                <FormControlLabel 
                    control={
                        <Switch 
                            checked={ prom }
                            onChange={(e) =>
                            setProm(
                                    e.target.checked
                            )
                        }
                    />
                } label="Deseo recibir Promociones" />
           
                <FormControlLabel
                    control={
                        <Switch 
                            checked={ nov } 
                            onChange={(e) => 
                            setNov(
                                    e.target.checked
                            )
                        } 
                    />
                } 
                    label="Deseo recibir Novedades"
                />
            </FormGroup>

            {/* Componente Button para enviar el formulario */}
            <Button 
                variant="contained" 
                type="submit"
            >
                Registrarse
            </Button>
        </form>
    )
}

// Exporta el componente FormSignUp
export default FormSignUp;