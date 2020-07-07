import React from 'react'
import Cards from '../../components/Cards/index'
import { cardInfo } from '../../assets/cardInfo'
import Footer from '../../components/Footer/index'
import './style.css'

export default function RootHome() {
    return (
        <>
            <div className="content">
                <Cards cardList={cardInfo} />
            </div>
            <div className="content-footer">
                <Footer />
            </div>
        </>
    );
}
