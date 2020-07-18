import React, { useState } from 'react';
import './index.css';

export default function Cards({ cardList }) {

    const nonPassMessage = 'Seu perfil não possui acesso à este recurso, favor contatar nossa central de atendimento para obtê-lo.'
    function showNonPassMessage() {
        var show = document.getElementById('snackbar')
        show.className = 'show'
        setTimeout(function () { show.className = '' }, 3000)
    }

    return (
        <div className="container">
            {cardList.map((card, key) => {
                return (
                    <>
                        <div className="card">
                            <div className="card">
                                <a href={card.links[0].go_to}>
                                    <button style={{ backgroundColor: card.panel_color, height: '100px' }}>
                                        {card.title}
                                    </button>
                                </a>
                            </div>
                            <div>
                                <img src={card.img} />
                            </div>
                            <div style={{ height: '140px' }} className="icon">
                                <i style={{ fontSize: '350%', color: 'white', marginTop: '10%' }} className="material-icons">{card.icon}</i>
                            </div>
                            <div className="subtitle">
                                <p>{card.subtitle}</p>
                            </div>
                            <div style={{ margin: "24px 0;" }}>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-facebook"></i></a>
                            </div>
                            <div className="line_1"></div>
                            <div className="card-menu">
                                {card.links.map(link =>
                                    <div>
                                        <a
                                            onClick={() => { if (!link.active) showNonPassMessage() }}
                                            href={link.go_to}
                                            style={{ color: link.active ? 'linen' : 'rgb(177, 169, 162)' }}
                                        >
                                            {link.title}
                                        </a>
                                        <br />
                                    </div>)
                                }
                            </div>
                        </div>
                        <div id="snackbar">{nonPassMessage}</div>
                    </>
                )
            })}
        </div >
    );
}