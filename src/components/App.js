import React from "react";
import faker from "faker";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import PersonCard from "./PersonCard";

class App extends React.Component {
  state = { filteredPersonList: [], isSearching: false };

  createPersonData(count) {
    return {
      key: count,
      email: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
      avatar: faker.image.avatar(),
      content: faker.lorem.paragraph(),
      countryCode: faker.address.countryCode()
    };
  }

  createPersonFakerData = () => {
    this.personList = [];
    let count = 1;
    while (count <= 10) {
      const person = this.createPersonData(count);
      this.personList.push(person);
      count++;
    }
  };

  componentDidMount() {
    this.createPersonFakerData();
    console.log(this.personList);
  }

  setSearchingState = isSearching => {
    this.setState({ isSearching });
  };

  onSubmit = searchText => {
    this.setSearchingState(true);

    const trimSearch = searchText && searchText.trim().toLowerCase();
    const filteredPersonList = !searchText
      ? []
      : this.personList.filter(person =>
          person.email.toLowerCase().includes(trimSearch)
        );
    this.setState({ filteredPersonList });

    setTimeout(() => {
      this.setSearchingState(false);
    }, 500);
  };

  content = () => {
    if (this.state.isSearching) {
      return <Spinner />;
    }

    if (!this.state.filteredPersonList.length && !this.state.isSearching) {
      return <div>No Results!</div>;
    }

    const results = this.state.filteredPersonList.map(person => {
      return <PersonCard {...person} />;
    });

    return <div className="ui cards">{results}</div>;
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSubmit} />
        <div>{this.content()}</div>
      </div>
    );
  }
}

export default App;
