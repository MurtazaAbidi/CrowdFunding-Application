import { connect } from 'react-redux';
import LinaerStepper from '../Pages/CreateCampaign/LinearStepper';
import { setData } from '../services/action';

const mapStateToProps = (state) => {
    return {
        title: state.title,
        projectDescription: state.projectDescription,
        goalAmount: state.goalAmount,
        milestonesData: state.milestonesData,
        picture: state.picture,
        InvestmentTypeDetails: state.InvestmentTypeDetails,
        InvestmentType: state.InvestmentType,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // incrementCounter: () => dispatch(incrementCounter()),
        // addTodo: (message) => dispatch(addTodo(message)),
        // addAnother: (message) => dispatch(addAnother(message)),
        setData: (data) => dispatch(setData(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LinaerStepper);