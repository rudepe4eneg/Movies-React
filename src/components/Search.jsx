import { Component } from "react";

export class Search extends Component {
    state = {
        search: "",
        type: "all",
    };

    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovie(this.state.search, this.state.type);
        }
    };

    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovie(this.state.search, this.state.type);
            }
        );
    };

    render() {
        const { search, type } = this.state;

        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        placeholder='Search'
                        type='search'
                        className='validate'
                        value={search}
                        onChange={(e) => {
                            this.setState({ search: e.target.value });
                        }}
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className='btn search-btn'
                        onClick={() => this.props.searchMovie(search, type)}
                    >
                        Search
                    </button>
                </div>
                <div>
                    <label>
                        <input
                            className='with-gap'
                            name='all'
                            type='radio'
                            data-type='all'
                            checked={type === "all"}
                            onChange={this.handleFilter}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='movie'
                            type='radio'
                            data-type='movie'
                            checked={type === "movie"}
                            onChange={this.handleFilter}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='series'
                            type='radio'
                            data-type='series'
                            checked={type === "series"}
                            onChange={this.handleFilter}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        );
    }
}
