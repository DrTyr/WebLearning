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
                    <div className="row">
                        <div className="column">
                            <img
                                className="centerImage"
                                src={this.state.imgSrc}
                                height="150"
                                width="150"
                                alt="Carte de l'antarctique"
                            />

                            <h1>Les Manchots d'Antarctique</h1>
                            <ul>
                                <li>
                                    <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Emperor_Penguin_Manchot_empereur.jpg/580px-Emperor_Penguin_Manchot_empereur.jpg">
                                        Le manchot empereur
                                    </a>
                                    <div className="box">
                                        <iframe
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Emperor_Penguin_Manchot_empereur.jpg/580px-Emperor_Penguin_Manchot_empereur.jpg"
                                            width="50%"
                                            height="50%"
                                        ></iframe>
                                    </div>
                                </li>
                                <li>Le manchot d'Adélie</li>
                                <li>Le manchot à jugulaire</li>
                                <li>Le manchot papou</li>
                            </ul>

                            <textarea
                                value={this.state.textAreaValue}
                                onChange={this.handleChange}
                            />
                            <div>{this.state.textAreaValue}</div>
                        </div>
                        <div className="column">
                            <img
                                className="centerImage"
                                src="https://tse1.mm.bing.net/th?id=OIP.YPhOa_qtz5G_aL4hftSeQAHaFb&pid=Api"
                                height="150"
                                width="150"
                                alt="Carte de l'antarctique"
                            />
                            <h1>Les Manchots d'Australie/Nouvelles Zélandes</h1>
                            <ul>
                                <li>Le manchot pygmée</li>
                                <li>Le gorfou des Snares</li>
                                <li>Le gorfou du Fiordland</li>
                                <li>Le manchot antipode</li>
                            </ul>
                            CECI EST UN TEST !!!!
                        </div>
                    </div>
                </body>
            </div>
        );
    }
}

export default App;
