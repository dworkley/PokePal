import React , {Component} from 'react';
import './Splash.css'


export class SplashScreen extends Component {

    render() {
        return(
            <div className="container">
                <div className='titleContainer'>
                <h1 className='title'>PokePal</h1>
                </div>
                <div className='logo'>
                    <img style={{maxHeight: 200, maxWidth: 150}} src={require('../../assets/images/Background.jpeg')}/>
                </div>
                </div>
        )
    }
}