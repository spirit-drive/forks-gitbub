import React, {Component} from "react";
import getClassName from '../../lib/getClassName';

export default class Bookmark extends Component {

    static defaultProps = {
        isCheck: true,
    };

    state = {
        isCheck: this.props.isCheck
    };

    componentWillReceiveProps({isCheck}) {
        this.setState({isCheck})
    }

    render () {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={getClassName('bookmark', this.props.className, this.state.isCheck && 'bookmark_active')} viewBox="0 0 510 484">
                <path d="M255,389.863L412.59,485,370.9,305.575,510,184.913l-183.371-15.75L255,0,183.37,169.163,0,184.913,139.1,305.575,97.41,485Z"/>
            </svg>


        )
    }
}
