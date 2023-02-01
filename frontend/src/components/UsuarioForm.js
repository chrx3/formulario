import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';
import Usuarios from "./Usuarios";

export default function UsuarioForm({usuarios, setUsuarios}){
    const [nombre, setNombre] = useState('');
    const [apellidop, setApellidop] = useState('');
    const [apellidom, setApellidom] = useState('');
    const [estado, setEstado] = useState('');
    const [telefono, setTelefono] = useState('');
    const [rut, setRut] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('');

    const handleChange = e =>{
        setNombre(e.target.nombre);
        setApellidop(e.target.apellidop);
        setApellidom(e.target.apellidom);
        setEstado(e.target.estado);
        setTelefono(e.target.telefono);
        setRut(e.target.rut);
        setPassword(e.target.password);
        setRol(e.target.rol);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if(!password){
            alert('Ingrese un nombre')
        }

        axios.post('/post/', {
            nombre:nombre,
            apellidop:apellidop,
            apellidom:apellidom,
            estado:estado,
            telefono:telefono,
            rut:rut,
            password:password,
            rol:rol
        }).then((response) =>{
            setNombre('');
            setApellidop('');
            setApellidom('');
            setEstado('');
            setTelefono('');
            setRut('');
            setPassword('');
            setRol('');
            const { data } = response;
            setUsuarios([
                ...usuarios,
                data
            ]).catch(() =>{
                alert('Algo salió mal')
            })
        })
    }

    return(
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <FormControl onChange={handleChange} value={nombre} placeholder="Nombre" type="text"/><br/>
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl onChange={handleChange} value={apellidop} placeholder="Apellido paterno" type="text"/><br/>
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl onChange={handleChange} value={apellidom} placeholder="Apellido materno" type="text"/><br/>
            </InputGroup> 
            <InputGroup className="mb-3">
                <FormControl onChange={handleChange} value={estado} placeholder="Estado" type="text"/><br/>
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl onChange={handleChange} value={telefono} placeholder="Teléfono" type="text"/><br/>
                </InputGroup>    
            <InputGroup className="mb-3">
                <FormControl onChange={handleChange} value={rut} placeholder="Rut" type="text"/><br/>
            </InputGroup>    
            <InputGroup className="mb-3">  
                <FormControl onChange={handleChange} value={password} placeholder="Password" type="password"/><br/>
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl onChange={handleChange} value={rol} placeholder="Rol" type="text"/><br/>
                
            </InputGroup>
            <Button variant='dark' type='submit'>
                Ingresar
            </Button>
        </Form>
    )
}
