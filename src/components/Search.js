import React from 'react'

class Search extends React.Component {

  state = {
    searchInput: ""
  }

  changeHandler = (e) => {
    e.persist()
    this.setState(() => ({ searchInput: e.target.value }), () => this.props.appSearchHandler(this.state.searchInput))
  }

  render() {
    return (
      <div className="ui search" >
        <div className="ui icon input">
          <input className="prompt" value={this.state.searchInput} onChange={this.changeHandler} />
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search
