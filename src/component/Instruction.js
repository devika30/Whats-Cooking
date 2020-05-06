import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
class Instruction extends Component {
    state={
        name:'',
        instruction:'',
        category:'',
        image:'',
        link:''
    }

    constructor(props) {
        super(props);
        console.log(props)
        let dish_id = props.match.params.id;
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dish_id}`)
        .then(res=>{this.setState({
            name:res.data.meals[0].strMeal,
            instruction:res.data.meals[0].strInstructions,
            category:res.data.meals[0].strCategory,
            image:res.data.meals[0].strMealThumb,
            link:res.data.meals[0].strYoutube
        })
      })
    }
    
    render() {
       
        return (
            <div class="card text-center">
            <div class="card-header">
            {this.state.category}
            </div>
            <div class="card-body">
              <h5 class="card-title">{this.state.name}</h5>
                <p class="card-text">{this.state.instruction}</p>
              <div className="row justify-content-center">
                <div className="col-4" >
                    <img className="image" src={this.state.image} style={{width:"100%",height:"315px"}} />
                </div>
               <div className="col-4" >
                     <iframe className="video" width="480" height="315"
                        src={"https://www.youtube.com/embed/" + this.state.link.slice(-11)}>
                        </iframe>
                    </div>
                     </div>
            </div>
            <div class="card-footer text-muted">
              2 days ago
            </div>
          </div>
        )
    }

}

export default Instruction
