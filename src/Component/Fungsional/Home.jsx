import React from 'react'
//import Produk from '../Class/Produk';
import Blog from './Blog'

const Home = () => {
    return <div>
     
   
    <Blog
    tanggal="12 Juni 2020"
    judul="Teknologi Blockchain"
    summary="Generate Lorem Ipsum placeholder text for use in your graphic."
    />

    <Blog
    tanggal="13 Juni 2020"
    judul="Teknologi Internet of Things"
    summary="Generate Lorem Ipsum placeholder text for use in your graphic."
    />

    <Blog
    tanggal="14 Juni 2020"
    judul="Desain Patern Laravel"
    summary="Generate Lorem Ipsum placeholder text for use in your graphic."
    />
</div>
}

export default Home;