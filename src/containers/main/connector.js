import { connect } from 'react-redux'
import { toggles_a } from '../../models/_actions.register'

const mapActionToProps = {
    getTogglesList: toggles_a.getTogglesListRequest,
    toggleItem: toggles_a.toggleRequest
}

const mapStateToProps = (state) => ({
    toggles: state.toggles.data,
    correct: state.toggles.correct,
    question: state.toggles.question
})

export default connect(mapStateToProps, mapActionToProps)