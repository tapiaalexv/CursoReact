const MyButton = () => {
    return (
        <button>i am a button</button>
    );
}

const OnlineText = () => {
    return(
        <>
            <h3>Online</h3>
        </>
    );
}

const OfflineText = () => {
    return(
        <>
            <h3>Offline</h3>
        </>
    );
}

const App = () => {

    const title = "Mi titulo desde una constante";
    const classTitle = 'text-center';
    const pathImg = "https://picsum.photos/200/300";
    const user = true;

    return (
        <>
            <h1 className={classTitle}>{title.toUpperCase()}</h1>
            <img src={pathImg} alt={`imagen-${title}`}/>
            <MyButton/>
            {user ? <OnlineText/> : <OfflineText/> }
            {user && <OfflineText/>}
        </>
    );
}
export default App;

/*
También se puede usar <div> </div>, sin embargo, react tiene <Fragment> que también puede ser vació <></>
*/