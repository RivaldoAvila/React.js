import React, { Component } from 'react';
import axios from "axios";
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button, Form} from 'reactstrap';
import {Link} from 'react-router-dom';
const api = 'http://localhost:3001'

class TambahComp extends Component {
    constructor(props){
        super(props)

        this.state = {
            nim: '',
            nama: '',
            jurusan: '',
            response: '',
            display: ''
        }
    }
handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
}

AddMahasiswa = () => {
    axios.post(api+'/tambah', {
        nim: this.state.nim,
        nama: this.state.nama,
        jurusan: this.state.jurusan
    }).then(JSON=>{
        if(JSON.data.status===200){
            this.setState({
                response: JSON.data.value,
                display: 'block'
            })
            }
            else{
                this.setState({
                    response: JSON.data.value,
                    display: 'block'
                })
            }
    })
}
    render() {
        return (
            <Container>
                <h4>Form Tambah Data</h4>
        <Alert color="primary" style={{display: this.state.display}}>{this.state.response}</Alert>
                <Form className="form">
                    <Col>
                    <Label>NIM</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="nim" value={this.state.nim} onChange={this.handleChange} placeholder="Masukan NIM"/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <Label>Nama</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukan Nama"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Jurusan</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="jurusan" value={this.state.jurusan} onChange={this.handleChange} placeholder="Masukan Jurusan"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Button type="button" onClick={this.AddMahasiswa}>Submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }
}

export default TambahComp;