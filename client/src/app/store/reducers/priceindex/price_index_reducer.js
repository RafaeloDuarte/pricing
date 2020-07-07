import INITIAL_STATE from './initialState'

function market(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'TOGGLE_PARAMS':
            return {
                ...state,
                departament: action.departament,
                productType: action.productType,
                product: action.product
            };
        case 'TOGGLE_DEPARTAMENT':
            return {
                ...state,
                departament: action.departament,
            };
        case 'TOGGLE_SECTION':
            return {
                ...state,
                productType: action.productType,
            };
        case 'TOGGLE_PRODUCT':
            return {
                ...state,
                product: action.product,
            };
        case 'TOGGLE_CITIES':
            return {
                ...state,
                cities: action.cities,
            }
        case 'TOGGLE_DATE':
            return {
                ...state,
                initialDate: action.initialDate,
                finalDate: action.finalDate
            }
        case 'TOGGLE_DATES':
            return {
                ...state,
                dates: action.dates
            }
        case 'TOGGLE_CLUSTER':
            return {
                ...state,
                cluster: action.cluster
            }
        default:
            return state;
    }
}

export default market