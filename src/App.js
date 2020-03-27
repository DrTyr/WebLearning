import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textAreaValue: 'TextArea valuedqsgqfsdf',
            imgSrc:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Location_Antarctica.svg/langfr-560px-Location_Antarctica.svg.png',
        };
    }

    handleChange = event => {
        this.setState({ textAreaValue: event.target.value });
    };

    render() {
        return (
            <div className="App">
                <body>
                    <div class="wrapper">
                        <header class="header">
                            Les Manchots d'Antarctique
                        </header>
                        <aside class="aside worldMap">
                            <img
                                src="https://tse1.mm.bing.net/th?id=OIP.YPhOa_qtz5G_aL4hftSeQAHaFb&pid=Api"
                                alt="Carte de l'antarctique"
                                width="150px"
                                length="150px"
                            />
                        </aside>
                        <article class="speciesName">
                            <p>Le Manchot Empereur</p>
                        </article>
                        <aside class="aside animalPicture">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Emperor_Penguin_Manchot_empereur.jpg/580px-Emperor_Penguin_Manchot_empereur.jpg"
                                alt="Manchot"
                                width="150px"
                                length="150px"
                            />
                        </aside>
                    </div>
                    <div class="wrapper">
                        <footer class="footer">Footer</footer>
                    </div>
                </body>
            </div>
        );
    }
}

export default App;
