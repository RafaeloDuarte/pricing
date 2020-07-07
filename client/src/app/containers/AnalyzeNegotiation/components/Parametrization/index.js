import React from 'react';
import BasicFilter from './BasicFilter'
import Date from './Date'
import PromocionalPrice from './PromocionalPrice/index'
import Sensibility from './Sensibility/index'
import Competition from './Competition/Competition'
import './main.css'
import CompetitionBase from './Competition/CompetitionBase';

export default function Parametrization() {
    return (
        <>
            <section className="Parametrization">
                <div className="date">
                    <center><p>Data</p></center>
                    <Date />
                </div>
                <div className="promocional">
                    <PromocionalPrice />
                </div>
                <div className="basic-filter">
                    <BasicFilter />
                </div>
                <div className="Competition">
                    <div>
                        <Competition />
                    </div>
                    <div>
                        <CompetitionBase />
                    </div>
                </div>
                <div className="sensibility">
                    <center><p>Sensibilidade</p></center>
                    <Sensibility />
                </div>
            </section>
        </>
    );
}