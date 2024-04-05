import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import './pokedex.css';

export class PokedexScreen extends Component{

    render() {

        return(

            <div className='container'>
                <div className='titleArea'>
                    <div className='backButtonArea'>
                        <Link to={"home"}><img src={require('../../assets/images/icons-back-100.png')}/></Link>
                    </div>
                    <div className='titles'>
                    <h1>PokePal</h1>
                    <h3>Pokedex</h3>
                    </div>

                </div>
            </div>
        )
    }
    
}