import React from 'react'

class Haribesar extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="background">

                </div>
                <div className="container-fluid col-sm-6 justify-content-center text-center text-light font-weight-normal">
                <br/><br/><br/>
                    <h1>Hari Besar Lingkungan Hidup</h1> <br/>
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Tanggal</th>
                                <th scope="col">Kegiatan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>10 JANUARI</td>
                                <td>Hari Perencanaan Gerakan 1 Juta Pohon</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>2 FEBRUARI</td>
                                <td>Hari lahan basah Se Dunia</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>21 FEBRUARI</td>
                                <td>Hari Peduli Sampah nasional</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>21 FEBRUARI</td>
                                <td>Hari Peduli Sampah nasional</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>6 MARET</td>
                                <td>Hari Strategi konservasi Se Dunia</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>16 MARET</td>
                                <td>Hari Bhakti Rimbawan</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>20 MARET</td>
                                <td>Hari Kehutanan Sedunia</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>21 MARET</td>
                                <td>Hari Hutan Internasional</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>22 MARET</td>
                                <td>Hari Air Se Dunia</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

export default Haribesar;