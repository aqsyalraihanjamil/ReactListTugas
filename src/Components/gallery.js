import React from 'react'
import a1 from './a1.jpg'
import a2 from './a2.jpg'
import a3 from './a3.jpg'
import a4 from './a4.jpg'
import a5 from './a5.jpg'
import a6 from './a6.jpg'


class Gallery extends React.Component {
    render() {
        return (
            
            <div>
                <div className="background">

                </div>
                <div className="container-fluid col-sm-8 justify-content-center text-center text-light font-weight-normal">
                <br/><br/><br/>
                <h1 className="font-weight-bolder">Galeri</h1>
                <br/><br/>
                    <div className="row">
                        <div className="column mb-5">
                            <img className="gambar" alt="a1" src={a1}/>
                        </div>
                        <div className="column ">
                            <img className="gambar" alt="a2" src={a2}/>
                        </div>
                        <div className="column ">
                            <img className="gambar" alt="a3" src={a3}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column ">
                            <img className="gambar" alt="a4" src={a4}/>
                        </div>
                        <div className="column ">
                            <img className="gambar" alt="a5" src={a5}/>
                        </div>
                        <div className="column ">
                            <img className="gambar" alt="a6" src={a6}/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Gallery;