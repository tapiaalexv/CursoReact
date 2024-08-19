import PropTypes from "prop-types";

const MyButtonComp = ({text}) => {
    const handleOnClick = (tittle) => {
        console.log('handle click '+tittle);
    }
    return <button onClick={()=>handleOnClick(text)}> {text} </button>;
}
MyButtonComp.propTypes = {
    text: PropTypes.string.isRequired,
};

export default MyButtonComp;