import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import{ FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';

export default function Usuarios({ usuarios = [], setUsuarios}) {
    return(
        <div>
        <ListGroup>
            {usuarios.map( usuarios =>{
                return(

            <ListGroupItem key={usuarios.id} className="d-flex justify-content-between align-items-center">
                {usuarios.nombre}
                
                <div>
                    <FaEdit size={20} style={{cursor:'pointer'}}/>
                    <FaTrashAlt size={20} style={{cursor:'pointer'}}/>
                </div>
            </ListGroupItem>
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
    )
}