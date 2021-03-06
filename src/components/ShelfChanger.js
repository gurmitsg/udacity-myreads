import React, {Component} from 'react'



class ShelfChanger extends Component {

    changeShelf = (event) => {
        this.props.changeShelf(this.props.book, event.target.value);
    }
    
    render () {

        return (
            <div className="book-shelf-changer">
                <select value={this.props.currentShelf} onChange={this.changeShelf}>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
    
        )
    }

}

export default ShelfChanger