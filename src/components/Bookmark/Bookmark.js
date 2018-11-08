import React, {Component} from "react";
import getClassName from '../../lib/getClassName';

export default class Bookmark extends Component {

    static defaultProps = {
        isCheck: true,
    };

    state = {
        isCheck: this._setCheck(this.props.id)
    };

    _setLocalStorage (db) {
        localStorage.setItem('bookmark_4r436h6', JSON.stringify(db));
    }

    _getLocalStorage () {
        let db = localStorage.getItem('bookmark_4r436h6');
        return db && [...JSON.parse(db)];
    }

    _setCheck (id) {
        let db = this._getLocalStorage();
        if (db) {

            const index = db.indexOf(id);

            if (index !== -1) {
                return true;
            }

        } else {
            return false;
        }
    }

    componentWillReceiveProps({id}) {
        const isCheck = this._setCheck(id);
        this.setState({isCheck})
    }

    _saveInDB () {
        let db = this._getLocalStorage();
        const {id} = this.props;
        if (db) {
            const index = db.indexOf(id);

            if (index === -1) {
                db.push(id);
                this._setLocalStorage(db);
            }
        } else {
            db = [id];
            this._setLocalStorage(db);
        }
    }

    _deleteFromDB () {
        let db = this._getLocalStorage();
        const {id} = this.props;
        if (db) {
            const index = db.indexOf(id);

            if (index !== -1) {
                db.splice(index, 1);
                this._setLocalStorage(db);
            }
        }
    }

    _onClick = () => {
        const {isCheck} = this.state;
        !isCheck
            ? this._saveInDB()
            : this._deleteFromDB();

        this.setState({isCheck: !isCheck})
    };

    render () {
        return (
            <svg onClick={this._onClick} xmlns="http://www.w3.org/2000/svg" className={getClassName('bookmark', this.props.className, this.state.isCheck && 'bookmark_active')} viewBox="0 0 510 484">
                <path d="M255,389.863L412.59,485,370.9,305.575,510,184.913l-183.371-15.75L255,0,183.37,169.163,0,184.913,139.1,305.575,97.41,485Z"/>
            </svg>


        )
    }
}
