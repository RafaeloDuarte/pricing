import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const noAuth = Component => {
    class ComponentNoAuth extends React.Component {

        componentDidMount(){
            const {  authorized, history } = this.props
            actions.getUser()
            if(authorized) history.replace("/");
        }

        componentDidUpdate(prevProps){
            const { authorized, history } = prevProps;
            if( !authorized && this.props.authorized && this.props.usuario.role.includes("admin")){
                history.replace("/");
            }  
        }

        render(){
            return (
                <div>
                    <Component {...this.props} />
                </div>
            )
        }
    }

    const mapStateToProps = state => ({
        authorized: state.auth.authorized,
        usuario: state.auth.usuario
    });
    return connect(mapStateToProps, actions)(ComponentNoAuth);
}

export default noAuth;