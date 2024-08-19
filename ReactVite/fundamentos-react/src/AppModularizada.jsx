import imgDigimon from './assets/imgs/agumon.webp';
import {WelcomeText} from "./components/WelcomeText.jsx";
import ListFruits from "./components/ListFruits.jsx";
import MyButton from "./components/MyButton.jsx";

const AppModularizada = () => {

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

            <WelcomeText user={user}/>

            <ListFruits fruts={fruts}/>

        </>
    );
}
export default AppModularizada;

/*
También se puede usar <div> </div>, sin embargo, react tiene <Fragment> que también puede ser vació <></>
*/