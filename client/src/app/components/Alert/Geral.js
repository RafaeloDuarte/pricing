import React from 'react'

const AlertaGeral = ({ aviso }) => {
    if (!aviso) return null
    const { status, msg } = aviso
    return (
        <div className={`alert alert-${status ? "success" : "danger"}`}>
            <span>{msg}</span>
        </div>
    )
}

export default AlertaGeral