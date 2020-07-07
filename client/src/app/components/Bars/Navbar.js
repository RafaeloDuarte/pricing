import React from 'react';

export default function components({ tabList }) {
    return (
        <>
            <div className="row">
                <nav className="col s12 blue darken-4">
                    <div className="nav-wrapper">
                        <ul className="right hide-on-med-and-down">
                            {
                                tabList.map(tab => {
                                    return (
                                        <li className={tab.active} >
                                            <a href={tab.path}>{tab.label}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}
