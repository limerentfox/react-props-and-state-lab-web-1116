const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  constructor(props) {
    super(props)

  }


  handleCreatePets(){
    const petsElements = this.props.pets.map((pet, i) => {
      return <Pet isAdopted={this.props.adoptedPets.includes(pet.id)} key={i} pet={pet} onAdoptPet={this.props.onAdoptPet} />
    })

    return petsElements
  }

  render() {
    const petObects = this.handleCreatePets()
    return (
      <div className="ui cards">
        {petObects}
      </div>
    );
  }
}

module.exports = PetBrowser;
