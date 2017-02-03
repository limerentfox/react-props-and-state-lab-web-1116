const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();

    this.handleGender = this.handleGender.bind(this)
  }

  handleGender() {
    if (this.props.pet.gender === "male") {
      return '♂'
    } else {
      return '♀'
    }
  }

  handleAdoptPet(){
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} (gender: {this.handleGender()})</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">

          {this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.handleAdoptPet.bind(this)}>Adopt pet</button>}

        </div>
      </div>
    );
  }
}

module.exports = Pet;
