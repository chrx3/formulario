import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';

import ModalHeader from "react-bootstrap/esm/ModalHeader";
import{ FaEdit, FaTrashAlt } from 'react-icons/fa';
import MaterialTable from 'material-table';



export default class  UsuarioForm extends Component{
    constructor(){
        super();
        this.state = {
            usuarios : [],

            nombre : '',
            apellidop : '',
            apellidom : '',
            estado : '',
            telefono : '',
            rut : '',
            password : '',
            rol : ''

        }
    }

    componentDidMount(){
        this.updateUser();
    }


    updateUser = ()=>{
        axios.get('/get/',{

        }).then((response) =>{
            if (response.data.estado){
                
                this.setState({
                    usuarios:response.data.datos
                    
            })
            }
        })
    }
    //aun no agarra id
    deleteUser (id){
        axios.delete(`/delete/${id}`,{
            
        }).then(response => {
            console.log(response)
            console.log(response.data)

            const usuarios = this.state.usuarios.filter(item => item.id !== id);
            this.setState({usuarios})
            this.updateUser()
        
        })
    }
   

    handleSubmit = () =>{
        axios.post('/post/', {

            nombre : this.state.nombre,
            apellidop: this.state.apellidop,
            apellidom: this.state.apellidom,
            estado: this.state.estado,
            telefono: this.state.telefono,
            rut: this.state.rut,
            password: this.state.password,
            rol: this.state.rol
        }).then((response) =>{console.log(response)
            if (response.data.estado){
                
                alert('usuario ingresado')
                console.log(response.data.estado)
                this.updateUser()
                

            }else{
                alert('Error',response.mensaje_error)
            }

            
        })

    }
    cambiarValores = (e) =>{
        const {name,value} = e.target
        this.setState({
            [name]:value
        })
    }

    
  
    render(){
    return(
        <div>
            
            <Form>
                
                <InputGroup className="mb-3">
                    <FormControl name="nombre" value={this.state.nombre} onChange={this.cambiarValores}  placeholder="Nombre" type="text"/><br/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl name="apellidop" value={this.state.apellidop} onChange={this.cambiarValores} placeholder="Apellido paterno" type="text"/><br/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl name="apellidom" value={this.state.apellidom} onChange={this.cambiarValores} placeholder="Apellido materno" type="text"/><br/>
                </InputGroup> 
                <InputGroup className="mb-3">
                    <FormControl name="estado" value={this.state.estado} onChange={this.cambiarValores} placeholder="Estado" type="text"/><br/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl name="telefono" value={this.state.telefono} onChange={this.cambiarValores} placeholder="Teléfono" type="text"/><br/>
                    </InputGroup>    
                <InputGroup className="mb-3">
                    <FormControl name="rut" value={this.state.rut} onChange={this.cambiarValores} placeholder="Rut" type="text"/><br/>
                </InputGroup>    
                <InputGroup className="mb-3">  
                    <FormControl name="password" value={this.state.password} onChange={this.cambiarValores} placeholder="Password" type="password"/><br/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl name="rol" value={this.state.rol} onChange={this.cambiarValores} placeholder="Rol" type="text"/><br/>
                    
                </InputGroup>
                <Button onClick={this.handleSubmit} variant='dark' type='submit'>
                    Ingresar
                </Button>

            </Form>
            
                <ListGroup>
                    {this.state.usuarios.map( usuarios =>{
                        return(

                    <ListGroup.Item key={usuarios.id} className="d-flex justify-content-between align-items-center">
                        {usuarios.id}
                        {usuarios.nombre}
                        
                        <div>
                            <FaEdit size={20} style={{cursor:'pointer'}}/>
                            <FaTrashAlt  onClick={() => this.deleteUser(usuarios.id)}  size={20} style={{cursor:'pointer'}}/>
                            
                        </div>
                    </ListGroup.Item>
                    )
                    })}
                    
                </ListGroup>

                <Modal>
                    <ModalHeader>
                        <Modal.Title>
                            Edit Usuario
                        </Modal.Title>
                    </ModalHeader>
                    <Modal.Body>
                        <FormControl/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark">
                            Cerrar
                        </Button>
                        <Button  variant="dark">
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Modal>
                
        </div>
        
    )}

}