import React, { useEffect, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";

function Formulario(props) {
    const [Cargando, setCargando] = useState(false);
    const [datosFormulario, setDatosFormulario] = useState({
        nombre: "",
        contraseña: "",
    });

    const hacerPeticion = async (url) => {
        try {
            const response = await axios.get(url, { params: datosFormulario });
            console.log(response.data);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const procesarFormulario = async (evento, accion) => {
        evento.preventDefault();
        console.log("datos recuperados del formulario", datosFormulario);
        setCargando(true);
        try {
            let url;
            switch (accion) {
                case "iniciarSesion":
                    url = 'http://localhost:4567/iniciarSesion';
                    break;
                case "editar":
                    url = 'http://localhost:4567/editar';
                    break;
                case "eliminar":
                    url = 'http://localhost:4567/eliminar';
                    break;
                case "leer":
                    url = 'http://localhost:4567/leer';
                    break;
                default:
                    break;
            }
    
            if (url) {
                const response = await hacerPeticion(url);
                console.log(response);
                setCargando(false);
                if (datosFormulario.nombre === response.nombre) { 
                    console.log("Ok, el usuario es correcto");
                } else {
                    console.log("Error, el usuario es incorrecto");
                }
            }
        } catch (error) {
            console.log("error", error);
            setCargando(false);
        }
    };

    const cambiosFormulario = (evento) => {
        const { name, value } = evento.target;
        setDatosFormulario({ ...datosFormulario, [name]: value });
    };

    return (
        <>
            <h1>Inicio de sesión</h1>
            <form onSubmit={(evento) => procesarFormulario(evento, "iniciarSesion")}>
                <Box m={5}>
                    <TextField
                        label="Nombre:" variant="outlined" fullWidth onChange={cambiosFormulario} name="nombre" value={datosFormulario.nombre}>
                    </TextField>
                </Box>
                <Box m={5}>
                    <TextField
                        label="Contraseña:" variant="outlined" type="password" fullWidth onChange={cambiosFormulario} name="contraseña" value={datosFormulario.contraseña}
                    ></TextField>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                    <Box m={1}>
                        <Button variant="contained" type="submit" color="primary" disabled={Cargando}> Iniciar Sesión
                        </Button>
                    </Box>
                    <Box m={1}>
                        <Button
                            variant="contained" color="primary" disabled={Cargando} onClick={(evento) => procesarFormulario(evento, "editar")}>Editar
                        </Button>
                    </Box>
                    <Box m={1}>
                        <Button
                            variant="contained" color="primary" disabled={Cargando} onClick={(evento) => procesarFormulario(evento, "eliminar")}>Eliminar
                        </Button>
                    </Box>
                    <Box m={1}>
                        <Button
                            variant="contained" color="primary" disabled={Cargando} onClick={(evento) => procesarFormulario(evento, "leer")} >Leer
                        </Button>
                    </Box>
                </Box>
            </form>
        </>
    );
}

export default Formulario;
