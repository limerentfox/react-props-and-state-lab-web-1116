const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.changeType = this.changeType.bind(this)
    this.handleAdoptedPets = this.handleAdoptedPets.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onFindPetsClick(){
    fetch(this.getFetchAPI(this.state.filters.type)).then((response) => {
      response.json().then((data) => {
        this.setState({pets: data})
      })

    })
  }

  getFetchAPI(type){
    if (type === "cat"){
      return '/api/pets?type=cat'
    } else if (type === "dog"){
      return '/api/pets?type=dog'
    } else if (type === "micropig"){
      return '/api/pets?type=micropig'
    } else {
      return '/api/pets'
    }
  }

  changeType(type){
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
        }),
      })
    }

  handleAdoptedPets(id){
    this.setState({adoptedPets:[id].concat(this.state.adoptedPets)})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.changeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
