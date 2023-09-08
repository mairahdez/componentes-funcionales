import { Button } from "@mui/material"
import { TextField } from '@mui/material';
import { Switch } from "@mui/material"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


function FormSignUp() {
    return (
    <form>
        <TextField 
            id="name"
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="normal"
        />
        <TextField 
            id="lastName"
            label="Apellidos"
            variant="outlined"
            fullWidth
            margin="normal"
        />
        <TextField 
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
        />
       <FormGroup>
            <FormControlLabel control={
                <Switch defaultChecked
                />
            } label="Deseo recibir Promociones" />
       
            <FormControlLabel
              control={
              <Switch defaultChecked />
            } 
                label="Deseo recibir Novedades"
            />
       </FormGroup>
       <Button variant="contained">
        Registrarse
        </Button>
        </form>
    )
}

export default FormSignUp