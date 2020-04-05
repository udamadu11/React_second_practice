import React, { Component } from 'react';
import Banner from './banner';
import List from './List';
const url_Art = 'http://localhost:3301/artists';

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            artists: ''
        }
    }

    componentDidMount(){
        fetch(url_Art, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json =>{
            this.setState({
                artists: json
            })
        })
    }

    render(){
        return(
            <div>
                <Banner></Banner>
                <List allArtist={this.state.artists}></List>
            </div>
        )
    }
} 

export default Home;