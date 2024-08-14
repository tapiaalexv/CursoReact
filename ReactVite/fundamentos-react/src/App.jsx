import imgDigimon from './assets/imgs/agumon.webp';
import PropTypes from "prop-types";

const MyButton = (props) => {
    return (
        <button>{props.text}</button>
    );
}
MyButton.propTypes = {
    text: PropTypes.string.isRequired,
}

const MyButton2 = ({text}) => {
    return (
        <button>{text}</button>
    );
}
MyButton2.propTypes = {
    text: PropTypes.string.isRequired,
}

const OnlineText = () => {
    return (
        <>
            <h3>Online</h3>
        </>
    );
}

const OfflineText = () => {
    return (
        <>
            <h3>Offline</h3>
        </>
    );
}

const App = () => {

    const title = "Mi titulo desde una constante";
    const classTitle = 'text-center';
    //const pathImg = "src/assets/imgs/agumon.webp";
    const user = true;
    const fruts = ["🤡", "🥵", "😎"];

    return (
        <>
            <h1 className={classTitle}>{title.toUpperCase()}</h1>
            <img src={imgDigimon} alt={`imagen-${title}`}/>
            <MyButton text='btn 1' />
            <MyButton text='btn 2' />
            <MyButton text='btn 3' />
            {user ? <OnlineText/> : <OfflineText/>}
            {user && <OfflineText/>}
            <ul>
                <li key={'0'}>{fruts[0]}</li>
                <li key={'1'}>{fruts[1]}</li>
                <li key={'2'}>{fruts[2]}</li>
            </ul>
            <ul>
                {
                    fruts.map((frut, index) => (
                        <li key={index}>{frut} - {index}</li>
                    ))
                }
            </ul>

        </>
    );
}
export default App;

/*
También se puede usar <div> </div>, sin embargo, react tiene <Fragment> que también puede ser vació <></>
*/