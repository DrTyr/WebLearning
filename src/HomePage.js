import React from 'react';
import logo from './logo.svg';
import './HomePage.css';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 'page1',
            imgSrc:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Location_Antarctica.svg/langfr-560px-Location_Antarctica.svg.png',
        };
    }

    handleChange = event => {
        this.setState({ textAreaValue: event.target.value });
    };

    changePage = newPage => {
        this.setState({ currentPage: newPage });
    };

    page1 = () => {
        return (
            <div className="HomePage">
                <body>
                    <header className="header">
                        Les Manchots d'Antarctique
                    </header>
                    <div id="blocDeTete" className="wrapper">
                        <article className="worldMap">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Location_Antarctica.svg/langfr-560px-Location_Antarctica.svg.png"
                                alt="Carte de l'antarctique"
                                width="150px"
                                length="150px"
                            />
                        </article>
                        <article className="speciesName">
                            <p>Le Manchot Empereur</p>
                        </article>
                        <article className="animalPicture">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Emperor_Penguin_Manchot_empereur.jpg/580px-Emperor_Penguin_Manchot_empereur.jpg"
                                alt="Manchot"
                                width="150px"
                                length="150px"
                            />
                            <div>
                                <audio controls>
                                    <source
                                        src="media/CriManchot.mp3"
                                        type="audio/mp3"
                                        preload="none"
                                    />
                                </audio>
                            </div>
                        </article>
                    </div>
                    <div id="bloccentral" className="wrapper2">
                        <article className="otherSpecies">
                            <ul>
                                {'Les autres espèces'}
                                <li>Le manchot pygmée</li>
                                <li>Le gorfou des Snares</li>
                                <li>Le gorfou du Fiordland</li>
                                <li>Le manchot antipode</li>
                            </ul>
                        </article>
                        <article className="speciesArticle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas vel pellentesque leo. Fusce eu massa
                            at urna ornare tempus. Suspendisse malesuada
                            sagittis felis, sed bibendum justo. Phasellus id
                            imperdiet purus. Nunc tincidunt tincidunt
                            consectetur. Curabitur id lorem eu tellus tempor
                            semper. Ut sollicitudin pharetra maximus. In iaculis
                            dui arcu, at sollicitudin enim consectetur vitae.
                            Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas. Quisque
                            congue, risus vitae aliquet semper, diam nulla
                            vestibulum nunc, sit amet tempor tellus ligula ac
                            ligula. Etiam ultrices dapibus erat quis molestie.
                            Duis ut ligula in nulla tempus hendrerit. Etiam nisi
                            libero, sagittis eu volutpat quis, pharetra vel
                            diam. Orci varius natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Morbi
                            ultricies in erat a venenatis. Nulla varius nisl ut
                            felis mattis aliquet. Etiam luctus at orci a
                            tincidunt. Praesent porttitor nibh quis neque
                            fringilla, nec dapibus magna volutpat. Vestibulum mi
                            eros, tempus non commodo eget, rhoncus in ex.
                            Pellentesque lobortis ipsum viverra, tincidunt ex
                            sed, pretium eros. Curabitur ac diam diam. Aliquam
                            nec bibendum nisl, et ornare lorem. Ut sodales
                            gravida consectetur. Proin efficitur mauris nec leo
                            laoreet faucibus. Nunc euismod orci quis mauris
                            laoreet bibendum. Nulla aliquet erat enim, non
                            tempus sem luctus quis. Mauris ultricies purus et
                            nisi aliquet, ultrices cursus mi ultrices. Sed
                            finibus mollis aliquam. Nam in auctor mauris, vel
                            maximus lorem. Nam quis odio ac justo mollis
                            tincidunt dictum et justo. Maecenas scelerisque nisl
                            nulla, ut imperdiet magna lobortis id. Phasellus
                            aliquet eget sapien a dignissim. Morbi eu sodales
                            mauris. In id ligula purus. Morbi ullamcorper ante
                            tellus. Fusce et nisl lobortis, tincidunt lacus et,
                            porta justo. Mauris sem nisi, sagittis ac justo ac,
                            ornare lacinia nulla. Proin placerat nunc at massa
                            mollis tempus.
                        </article>
                        <button
                            onClick={() => {
                                this.changePage('page2');
                            }}
                        >
                            page 2
                        </button>
                    </div>
                    <div id="pied" className="wrapper">
                        <footer className="footer">Footer</footer>
                    </div>
                </body>
            </div>
        );
    };

    page2 = () => {
        return <div>Page 2</div>;
    };

    page3 = () => {
        return <div>Page 3</div>;
    };

    render() {
        //return this.page3();
        //return this['page3']();
        return this[this.state.currentPage]();
    }
}
