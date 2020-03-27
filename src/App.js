import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <body>
                <div class="row">
                    <div class="column">
                        <img
                            class="centerImage"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Location_Antarctica.svg/langfr-560px-Location_Antarctica.svg.png"
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
                                <div class="box">
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
                    </div>
                    <div class="column">
                        <img
                            class="centerImage"
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

export default App;
