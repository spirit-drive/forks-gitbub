import React, {Component} from "react";
import getClassName from '../../lib/getClassName';
import Search from '../Search/Search';
import ResultSearch from '../ResultSearch/ResultSearch';


export default class SearchPage extends Component {

    state = {
        data: false,
        error: false,
    };

    _getData = address => {
            fetch(`https://api.github.com/repos/${address}/forks`)
                .then(res => {
                    if (res.ok) {
                        this.setState({error: false});
                        return res.json();
                    } else {
                        return this.setState({error: address})
                    }
                })
                .then(data => data && this.setState({data}))
                .catch(console.error);
    };

    _onSubmit = e => {
        e.preventDefault();
        console.log(e.currentTarget.input.value);
        this._getData(e.currentTarget.input.value);
    };


    render () {
        const {data, error} = this.state;
        return (
            <section className={getClassName('search-page', this.props.className)}>
                <div className="search-page__wrapper">
                    <Search onSubmit={this._onSubmit}/>
                    {data && !error && <ResultSearch data={data}/>}
                    {error && <p className="search-page__error">https://github.com/{error} - Данный репозиторий не найден!</p>}
                </div>
            </section>

        )
    }
}
