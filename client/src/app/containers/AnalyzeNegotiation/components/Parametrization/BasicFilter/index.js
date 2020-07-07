import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from '../../../../../components/Select'
import { departamentList } from '../../../../../config/mocks'
import SectionSelect from './SectionSelect';
import './main.css'

function addDepartamentAction({ departament }) {
    return { type: 'TOGGLE_DEPARTAMENT', departament }
}

export default function DepartamentList() {
    const [departamentState, setDepartamentState] = useState('')
    const dispatch = useDispatch();

    function addDepartament(value) {
        dispatch(addDepartamentAction({
            departament: value,
        }))
    }
    const toggleDepartament = (e) => {
        setDepartamentState(e.value)
        addDepartament(e.value)
    }

    return (
        <>
            <center>
                <form className="filter">
                    <center><p>Filtro Básico</p></center>
                    <Select
                        value={departamentState}
                        firstEl='Departamento'
                        list={departamentList}
                        toggle={toggleDepartament} />
                    <SectionSelect departamentState={departamentState} />
                </form>
            </center>
        </>
    );
}