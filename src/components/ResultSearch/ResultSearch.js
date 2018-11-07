import React, { Component } from "react";
import ButtonArrow from '../ButtonArrow/ButtonArrow';
import InputNumber from '../InputNumber/InputNumber';

export default class ResultSearch extends Component {

    static defaultProps = {
        step: 5,
    };

    state = {
        data: false,
        page: 0
    };

    componentWillMount() {
        fetch('https://api.github.com/repos/gudh/ihover/forks')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const div = data.length / this.props.step;
                this._maxPage = (data.length % this.props.step ? Math.ceil(div) : div) - 1;
                this.setState({data});
            });
    }

    _getDataForRender () {
        const data = [...this.state.data];
        const start = this.state.page * this.props.step;
        const finish = this.props.step;
        return data.splice(start, finish);
    }

    next = () => {
        let {page} = this.state;
        ++page;
        this.setState({page})
    };

    back = () => {
        let {page} = this.state;
        --page;
        this.setState({page})
    };

    _onChange = page => {
        clearTimeout(this.timeOutId);
        this.timeOutId = setTimeout(() => {
            --page;
            page = page > this._maxPage
                ? this._maxPage
                : page < 0
                    ? 0
                    : page;
            this.setState({page})
        }, 1000);
    };

    render () {
        const {page} = this.state;
        return (
            <div className="result-search">
                {this.state.data &&
                    <div>
                        <div className="result-search__wrapper">
                            <table className="result-search__table">

                                <colgroup>
                                    <col className="result-search__cell_1"/>
                                    <col className="result-search__cell_2"/>
                                    <col className="result-search__cell_3"/>
                                    <col className="result-search__cell_4"/>
                                    <col className="result-search__cell_5"/>
                                </colgroup>

                                <thead className="result-search__thead">
                                    <tr>
                                        <th className="result-search__cell">Полное название репозитория</th>
                                        <th className="result-search__cell">Владелец</th>
                                        <th className="result-search__cell result-search__center">Количестов звезд</th>
                                        <th className="result-search__cell">Ссылка на репозиторий форка</th>
                                        <th className="result-search__cell result-search__center">Закладки</th>
                                    </tr>
                                </thead>

                                <tbody>
                                {this._getDataForRender().map((item, i) =>
                                    <tr key={`ResultSearch_tr_f3fdvlvf_${i}`}>
                                        <td className="result-search__cell">{item.full_name}</td>
                                        <td className="result-search__cell">{item.owner.login}</td>
                                        <td className={`result-search__cell result-search__center${item.stargazers_count ? '' : ' result-search__dark'}`}>{item.stargazers_count}</td>
                                        <td className="result-search__cell"><a href={item.html_url} target="_blank">{item.html_url}</a></td>
                                        <td className="result-search__cell result-search__center">X</td>

                                    </tr>
                                )}
                                </tbody>
                                <tfoot className="result-search__tfoot">
                                    <tr>
                                        <td colSpan="5" className="result-search__cell">
                                            <div className="result-search__justify">
                                                <div>
                                                    <ButtonArrow onClick={this.back} disabled={page === 0} vector={'left'}/>
                                                    <ButtonArrow onClick={this.next} disabled={page === this._maxPage} vector={'right'}/>
                                                </div>
                                                <div className="result-search__pagination">
                                                    <InputNumber className="result-search__page-number" value={page + 1} onChange={this._onChange}/>
                                                    <span className="result-search__page-total"> / {this._maxPage + 1}</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>

                        </div>

                    </div>
                }
            </div>
        )
    }
}
