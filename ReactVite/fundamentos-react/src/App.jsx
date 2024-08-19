import imgDigimon from './assets/imgs/agumon.webp';
import PropTypes from "prop-types";
import MyButtonComp from "./components/MyButton.jsx";
import {WelcomeText} from "./components/WelcomeText.jsx";

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

const Fruits = (props) => {
    return (
        <li>{props.frut}</li>
    );
}
Fruits.propTypes = {
    frut: PropTypes.string.isRequired,
}

const WelcomeTextOrg = ({user}) => (user ? <h3>Online</h3> : <h3>Offline</h3>);
/*if(user) return <h3>Online</h3>;
return <h3>Offline</h3>;*/
WelcomeTextOrg.propTypes = {
    user: PropTypes.bool.isRequired,
}

const MyButton3 = ({text}) => (
    <button
        onClick={() => {
            console.log('me diste click');
        }}
    >
        {text}
    </button>
);

MyButton3.propTypes = {
    text: PropTypes.string.isRequired,
};

const handleOnClick = () => {
    console.log('me diste click desde la funcion');
}
const MyButton4 = ({text}) => (
    <button onClick={handleOnClick}>
        {text}
    </button>
);
MyButton4.propTypes = {
    text: PropTypes.string.isRequired,
};

const MyButton5 = ({text}) => {
    const handleOnClick = (tittle) => {
        console.log('handle click '+tittle);
    }
    return <button onClick={()=>handleOnClick(text)}> {text} </button>;
}
MyButton5.propTypes = {
    text: PropTypes.string.isRequired,
};

const App = () => {

    const title = "Mi titulo desde una constante";
    const classTitle = 'text-center';
    //const pathImg = "src/assets/imgs/agumon.webp";
    const user = false;
    const fruts = ["🤡", "🥵", "😎"];

    return (
        <>
            <h1 className={classTitle}>{title.toUpperCase()}</h1>
            <img src={imgDigimon} alt={`imagen-${title}`}/>
            <MyButton text='btn 1'/>
            <MyButton text='btn 2'/>
            <MyButton text='btn 3'/>
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
            <ul>
                {
                    fruts.map((frut, index) => (
                        <Fruits frut={frut} key={index}/>
                    ))
                }
            </ul>
            <WelcomeText user={user}/>
            <MyButton3 text={'hola3'}/>
            <MyButton4 text={'hola4'}/>
            <MyButton5 text={'hola5'}/>

        </>
    );
}
export default App;

/*
También se puede usar <div> </div>, sin embargo, react tiene <Fragment> que también puede ser vació <></>
*/