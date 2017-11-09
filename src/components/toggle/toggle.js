import React, { Component } from 'react';
import './toggle.css';
import PropTypes from 'prop-types';

class Toggle extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className="rectangle-5" onClick={() => this.props.toggleItem({ item })}>
                <div className={item.active ? 'text' : this.props.correct ? 'text text_active_correct' : 'text text_active_incorrect'}>{item.left}</div>
                <div className={item.active ? this.props.correct ? 'text text_active_correct' : 'text text_active_incorrect' : 'text'}>{item.right}</div>
                <div className={item.active ? this.props.correct ? 'rectangle-3-correct slider' : 'rectangle-3 slider' : this.props.correct ? 'rectangle-3-correct' : 'rectangle-3'}></div>
            </div>
        );
    }
}

export default Toggle;

Toggle.propTypes = {
    item: PropTypes.object.isRequired,
}