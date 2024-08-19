import PropTypes from "prop-types";

export const WelcomeText = ({user}) => (<h3>{user ? "Online" : "Offline"}</h3>);
/*if(user) return <h3>Online</h3>;
return <h3>Offline</h3>;*/
WelcomeText.propTypes = {
    user: PropTypes.bool.isRequired,
}