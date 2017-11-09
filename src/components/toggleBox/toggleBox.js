import React, { Component } from 'react';
import Toggle from '../toggle/toggle';
import './toggleBox.css';
import PropTypes from 'prop-types';

class ToggleBox extends Component {
    render() {
        let toggles = this.props.toggles.map(el => {
            return (
                <Toggle key={el.id} item={el} {...this.props}/>
            );
        });
        return (
            <div className={this.props.correct ? 'mask mask-correct' : 'mask'}>
                <div>
                <div className="the-answer-is-incorr">{this.props.question}</div>
                    {toggles}
                    <div className="the-answer-is-incorr">
                        {this.props.correct ? 'The answer is correct!' : 'The answer is incorrect.'}
                    </div>
                </div>
            </div>
        );
    }
}

export default ToggleBox;

ToggleBox.propTypes = {
    toggles: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
}