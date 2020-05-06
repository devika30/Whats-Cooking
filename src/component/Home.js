import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './../index.css';
class Home extends Component {
    state={
        input:'',
        dishes:[]
    }
    handleChange=(e)=>{
        this.setState({input: e.target.value});
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        axios.post('https://www.themealdb.com/api/json/v1/1/search.php?s='+ this.state.input)
        .then(res=>{
            this.setState({
                dishes:res.data.meals
            })
        })
    }
    render() {
        console.log(this.state.dishes)
        const meals = this.state.dishes;
       
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Type cuisine name" 
                    aria-label="Recipient's username" 
                    aria-describedby="button-addon2" 
                    value={this.state.input}
                    onChange={this.handleChange}
                    
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                    </div>
                    </div>
                </form>
               <div className="search-section">
             
              <div className="row">
                
                {
                    meals!==null?(
                        meals.length?(meals.map((data,key)=>{
                        return(
                            <div key={key} className="col-3 m-3">
                            <div class="card">
                           <img className="image" src={data.strMealThumb} style={{width:"100%"}}/>
                            <div class="card-body">
                            <Link to={`/instruction/${data.idMeal}`}>
                            {data.strMeal}
                            </Link>
                            </div>
                          </div>
                          </div>
                        )
                    })):(<h1 className="text-center">No post Found</h1>)
                    ):("")
                }
                
              </div>
             
               </div>

            </div>
        )
    }
}

export default Home