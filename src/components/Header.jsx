const Header = (props) => {
    return (
        <div className="header-align">
            <div>
                <h1><img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Mega_man_in-game_logo.jpg" alt="Megaman logo" width="200px" />Galería de imágenes con React.</h1>                
            </div>           
            <h2>{props.title} </h2>
       </div>
    );
};
export default Header;