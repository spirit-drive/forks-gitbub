import React, {Component} from "react";
import getClassName from '../../lib/getClassName';

export default class Search extends Component {

    static defaultProps = {
        initial: 'gudh/ihover',
        onSubmit: () => console.log('Search', this.state.repos)
    };

    state = {
        repos: this.props.initial
    };

    _validate = value => {
        return value.replace(/\s*/g, '')
    };

    _onChange = e => {
        e.preventDefault();
        const repos = this._validate(e.currentTarget.value);
        this.setState({repos});
    };

    render () {
        return (
            <form onSubmit={this.props.onSubmit} className={getClassName('search', this.props.className)}>
                <div className="search__wrapper">
                    <div className="search__table">
                        <span className="search__text">https://github.com/</span>
                        <input className="search__input" type="text" value={this.state.repos} onChange={this._onChange} name="input"/>
                    </div>
                </div>
                <button className="search__button">Go</button>
            </form>

        )
    }
}
