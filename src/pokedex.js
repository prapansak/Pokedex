import React from 'react'
import ReactDOM from 'react-dom'

const HEADER = (props) =>(
    <header>{props.title}</header>
)

const CONTENT = (props) =>(
    <POKEMONCARD pokemon = {props.pokemon}/>
)

const POKEMONCARD = (props) =>(
    <section>
        {
            props.pokemon.pokemons.map(poke => (
                    <section className='card'>
                        <img src = {poke.img}/>
                        <span className='center'>{poke.name}</span>
                        <span className='center'>HP-{poke.hp}</span>
                        <span className='center'>ATTACK{poke.attack}</span>
                    </section>
            ))
        }
    </section>
)

const APP = () =>{
    const TITLE = "POKEDEX"
    const POKEMON = {'pokemons':[{
            name  : 'Bulbasaur',
            img   : 'img/1.png',
            hp    : '45',
            attack: '49'
        },{
            name  : 'Ivysaur',
            img   : 'img/2.png',
            hp    : '60',
            attack: '62'
        },{
            name  : 'Venusaur',
            img   : 'img/3.png',
            hp    : '80',
            attack: '82'
        },{
            name  : 'Charmander',
            img   : 'img/4.png',
            hp    : '39',
            attack: '52'
        },{
            name  : 'Charmeleon',
            img   : 'img/5.png',
            hp    : '58',
            attack: '64'
        },
    ]}
    
    return(
        <section>
            <HEADER title = {TITLE}/>
            <CONTENT pokemon = {POKEMON}/>
        </section>
    )
}

const ELEMENT = document.getElementById('pokemon')
ReactDOM.render(<APP/>,ELEMENT)