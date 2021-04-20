import React from "react";
import { Button, Dropdown} from 'react-bootstrap'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// import PersonList from "./API.js";

class BusinessList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div className='list'>
          { this.state.persons.map(person =><div className='business'>{person.company.name}</div>)}
      </div>
    )
  }
}

class ViewButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    if(this.state){
      return (
        <div>
          <Button variant="primary" onClick={this.handleClick}>
            {this.state.isToggleOn ? 'List' : 'Map'}
          </Button>
        </div>
      );
    }else{
      return (
        <div>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'List' : 'Map'}
          </button>
          <div>
            <h3>To display map</h3>
          </div>
        </div>
      );
    }
  }
}

class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({value: event.target.value})
  }
  handleSubmit(event){
    //console.log(this.state.value)
    event.preventDefault()
  }
  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>  
        <label>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button className='search' type="submit" value="Submit">Search for Business</button>
      </form>
      </div>
    )
  }
}

function SearchBusiness() {
    return (
      <body>
        <div><SearchForm /></div>
        <div className='page-container'>
        <div className='filter-container'>
        <div>
          <filter>Filter By :</filter>
        </div>
        <div>
          <filterby>Category</filterby><br/>
          <input type='checkbox'></input>Local Markets<br/>
          <input type='checkbox'></input>Technology<br/>
          <input type='checkbox'></input>Beauty<br/>
          <input type='checkbox'></input>Education<br/>
          <input type='checkbox'></input>Crafting<br/>
        </div>
        <div>

          <filterby>Location</filterby><br/>
          <input type='checkbox' name='New York'></input>New York<br/>
          <input type='checkbox' name='New Jersey'></input>New Jersey<br/>
          <input type='checkbox' name='Conneticut'></input>Conneticut<br/>
          <input type='checkbox'></input>Other<br/>
        </div>
        <div><ViewButton /></div><br/>
        <Link to="/SearchBusinesses" className='filter-button'>Filter</Link>
        </div>
        <div className='list-container'>
          <BusinessList />
        </div>
        </div>
      </body>
    );
  }

export default SearchBusiness;