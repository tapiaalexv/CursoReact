import Fruits from "./Fruits.jsx";
import PropTypes from "prop-types";

const ListFruits = ({fruts}) => {
    return (
        <ul>
            {
                fruts.map((frut, index) => (
                    <Fruits frut={frut} key={index}/>
                ))
            }
        </ul>
    );
}

ListFruits.propTypes = {
    fruts: PropTypes.array.isRequired,
}

export default ListFruits;