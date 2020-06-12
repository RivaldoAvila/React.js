import React from 'react'
import './CSS/Produk.css'

class Produk extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stok,
            sub: "Beli",
            status: "Tersedia",
            disabled: false

        }
    }
    ButtonBeli = () => {
        this.setState({
            stock: this.state.stock -1
        })

        if(this.state.stock ===1){
            this.setState({
                status: "Habis",
                disabled: true
            })
        }
    }

    render(){
        return(
            <div className="box-stock">
                <h2>{this.props.nama}</h2>
                <img src="https://asset.kompas.com/crops/_FDSiTQ2Ai89AVIRZ2rbP3sX808=/44x10:753x483/750x500/data/photo/2020/05/05/5eb0c7b7dcaae.png" alt=""/>
                <p><b>Rp. {this.props.harga}</b></p>
                <p>Stok : {this.state.stock}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
                <p>{this.state.status}</p>

            </div>
        )
    }
}

export default Produk;