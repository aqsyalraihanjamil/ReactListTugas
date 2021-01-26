import React, { Component } from "react";
import $ from "jquery";
class Agenda extends Component {
    constructor() {
        super();
        this.state = {
            acara: [
                { no: "1", nama: "Hari Reboisasi", tanggal: "" },
                { no: "2", nama: "Hariku cerahku", tanggal: "" }
            ],
            no: "",
            nama: "",
            tanggal: "",
            action: ""
        }
    }
    bind = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    SaveAcara = (event) => {
        event.preventDefault();
        let temp = this.state.acara
        if(this.state.action === "insert") {

            temp.push({
                    no : this.state.no,
                    nama : this.state.nama,
                    tanggal : this.state.tanggal
            });
        }else if(this.state.action === "update") {
            let index = temp.findIndex(item => item.no === this.state.no);
            temp[index].nama = this.state.nama;
            temp[index].tanggal = this.state.tanggal;
            }
            this.setState({acara:temp});
            $("#modal").modal('hide');
        }
    Add = () => {
        this.setState({
            no: "",
            nama: "",
            tanggal: "",
            action: "insert"
        })
    }
    Edit = (item) =>{
        this.setState ({
            no: item.no,
            nama: item.nama,
            tanggal: item.tanggal,
            action: "update"
        })
    }
    Drop = (index) => {
        let temp = this.state.acara;
        temp.splice(index, 1);
        this.setState({ acara: temp })
    }
    
    render() {
        return (
            <div className="container">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Tanggal</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {this.state.acara.map((item, index) => {
                        return(
                        <tbody >
                            <tr>
                                <th scope="row" key={index}>{item.no}</th>
                                <td>{item.nama} </td>
                                <td>{item.tanggal} </td>
                                <td><button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}
                                    data-toggle="modal" data-target="#modal">
                                    Edit
                                    </button>
                                    <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>
                                    Hapus
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        );
                    })}
                </table>
                <button className="btn btn-sm btn-success m-3" onClick={this.Add}
                    data-toggle="modal" data-target="#modal">
                    Tambah Data
	            </button>
                <div className="modal fade" id="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-success text-white">
                                <h5>Form List Lingkungan Hidup</h5>
                            </div>
                            <form onSubmit={this.SaveAcara}>
                                <div className="modal-body">
                                    No
                                <input type="text" name="no" className="form-control" onChange={this.bind}
                                        value={this.state.no} />
	                            Nama
	                            <input type="text" name="nama" className="form-control" onChange={this.bind}
                                        value={this.state.nama} />
	                            Tanggal
	                            <input type="date" name="tanggal" className="form-control" onChange={this.bind}
                                        value={this.state.tanggal} />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Simpan
	                            </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Agenda;