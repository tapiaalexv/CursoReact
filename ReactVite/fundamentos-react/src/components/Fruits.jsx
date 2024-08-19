import PropTypes from "prop-types";

const Fruits = (props) => {
    return (
        <li>{props.frut}</li>
    );
}
Fruits.propTypes = {
    frut: PropTypes.string.isRequired,
}

export default Fruits;