import React, { Component } from 'react'
import axios from 'axios'
class Random extends Component {
    state={
        name:'',
        instruction:'',
        category:'',
        image:'',
        link:''
    }
    onclick=()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res=>{this.setState({
            name:res.data.meals[0].strMeal,
            instruction:res.data.meals[0].strInstructions,
            category:res.data.meals[0].strCategory,
            image:res.data.meals[0].strMealThumb,
            link:res.data.meals[0].strYoutube
        })
    })
}
componentDidMount = ()=>{
    this.onclick()
}
    render() {
        return (
     
                <div className="card">
                <div className="card-body">
                <h1>WhAtS cOoKiNg?!</h1>
                <div className="row">
                <div className="col-lg-6">
                <h4 className="name">{this.state.name}</h4>
                <p className="category">Type: { this.state.category}</p>
                 </div >
                 <div  className="col-lg-6">
                 <button type="submit" className="btn btn-dark" onClick={this.onclick}>Click here</button>
                 </div>
                </div>
                <div className="row">
                    <div className="col-lg-6" style={{float:"left"}}>
                    <p class="card-text">{this.state.instruction}</p>
                </div>

                <div className="col-lg-6">
                    
                    <div className="row">
                        <div className="col-8">
                        <img className="image" src={this.state.image} style={{width:"100%",height:"350px",float:"right"}} />
                        </div>
                        <div className="col-8">
                        <iframe className="video" style={{width:"100%"}} 
                        src={"https://www.youtube.com/embed/" + this.state.link.slice(-11)}>
                        </iframe>
                        </div>
                    </div>
                </div>
                </div>
                
                    </div>
                </div>

        )
    }
}

export default Random