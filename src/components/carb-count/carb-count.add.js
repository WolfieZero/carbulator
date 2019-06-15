import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Stepper, Row, Col } from 'framework7-react';

import actions from '../../actions';

const Add = ({ handleAddCarb }) => {
    const input = React.createRef();
    const defaultValue = 0;

    const handleAdd = event => {
        event.preventDefault();
        const carb = parseInt(input.current.getValue(), 10);
        if (carb > 0) {
            handleAddCarb(carb);
        }
    };

    return (
        <>
            <Row>
                <Col>
                    <Stepper
                        large
                        value={defaultValue}
                        ref={input}
                        min={0}
                        max={1000}
                        step={1}
                        autorepeat={true}
                        wraps={true}
                        manualInputMode={true}
                        decimalPoint={1}
                    />
                </Col>
                <Col>
                    <Button fill large type="submit" onClick={handleAdd}>Add</Button>
                </Col>
            </Row>
        </>
    );
};

Add.propTypes = {
    handleAddCarb: PropTypes.func.isRequired,
};

const mapStateToProperties = () => ({
    // ...
});

const mapDispatchToProperties = {
    handleAddCarb: actions.carbs.addCarb,
};

export default connect(
    mapStateToProperties,
    mapDispatchToProperties
)(Add);
