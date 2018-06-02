import React, {Component} from 'react';
import './VampireList.css'


class VampireList extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            vampires: [
                {
                    name: 'Dracula',
                    title: 'Count, Vampire King',
                    nationality: 'Székely',
                    home: 'Transylvania',
                    creator: 'Bram Stoker',
                    appearance: "Dracula",
                    actor: 'Bela Lugosi, Christopher Lee, Luke Evans',
                    // url: './images/bela dracula.jpg'
                },
                {
                    name: 'Lestat de Lioncourt',
                    title: 'The Brat Prince, Marquis d"Auvergne',
                    nationality: 'French',
                    home: 'New Orleans',
                    creator: 'Anne Rice',
                    appearance: 'Interview with the Vampire',
                    actor: 'Tom Cruise',

                },
                {
                    name: 'Abel Nightroad',
                    title: 'Papal State Affairs Special Op',
                    nationality: 'Crusnik',
                    home: 'The Vatican',
                    creator: 'Sunao Yoshida',
                    appearance: 'Trinity Blood',
                    actor: 'Hiroki Touchi, Troy Baker',

                },
                {
                    name: 'Vamp',
                    title: 'Dead Cell Op/Knife Specialist',
                    nationality: 'Romanian ',
                    home: 'None',
                    creator: 'Hideo Kojima',
                    appearance: 'Metal Gear Solid 2: Sons of Liberty',
                    actor: 'Ryoutarou Okiayu, Phil LaMarr',

                },
                {
                    name: 'Adrian "Alucard" Fahrenheit Ţepeş',
                    title: 'The Tragic Prince',
                    nationality: 'Romanian',
                    home: 'Transylvania',
                    creator: 'Ayami Kojima',
                    appearance: 'Castlevania III: Draculas Curse',
                    actor: 'Ryoutarou Okiayu, Yuri Lowenthal',

                },
            ],
            filterValue: this.props.filterValue
        }
    }


    render(){
        return(
            
            <div>
                {this.state.vampires.filter((v, i) => {
                        // console.log(v)
                        return (
                            v.name.toLowerCase().includes(this.props.filterValue.toLowerCase()) ||

                            v.title.toLowerCase().includes(this.props.filterValue.toLowerCase()) ||

                            v.nationality.toLowerCase().includes(this.props.filterValue.toLowerCase()) ||

                            v.home.toLowerCase().includes(this.props.filterValue.toLowerCase()) ||
                            
                            v.creator.toLowerCase().includes(this.props.filterValue.toLowerCase()) ||
                            
                            v.appearance.toLowerCase().includes(this.props.filterValue.toLowerCase()) ||
                            
                            v.actor.toLowerCase().includes(this.props.filterValue.toLowerCase()) 
                            
                        )

                        
                    }).map((v, i) => {
                        return (
                            <li className="individual" key={`i-${i}`}>
                                <h3>{v.name}</h3>
                                    <br />{v.title}
                                    <br />{v.nationality}
                                    <br />{v.home}
                                    <br />{v.creator}
                                    <br />{v.appearance}
                                    <br />{v.actor}
                            </li>
                        )}
                    )
                }
            </div>
        )
    }



}

export default VampireList;