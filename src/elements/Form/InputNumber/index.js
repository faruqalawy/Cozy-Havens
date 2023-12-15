import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default function Number(props) {
    const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural, onChange, outerClassName, readOnly } = props;

    const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

    useEffect(() => {
        setInputValue(`${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? 's' : ''}`);
    }, [value, prefix, suffix, isSuffixPlural]);

    const handleChange = (e) => {
        let newValue = String(e.target.value);
        if (prefix) newValue = newValue.replace(prefix, '');
        if (suffix) newValue = newValue.replace(suffix, '');

        if (!isNaN(newValue) && +newValue <= max && +newValue >= min) {
            setInputValue(`${prefix}${newValue}${suffix}${isSuffixPlural && newValue > 1 ? 's' : ''}`);
            onChange({
                target: {
                    name: name,
                    value: newValue,
                },
            });
        }
    };

    const handleMinusClick = () => {
        if (+value > min) {
            const newValue = +value - 1;
            setInputValue(`${prefix}${newValue}${suffix}${isSuffixPlural && newValue > 1 ? 's' : ''}`);
            onChange({
                target: {
                    name: name,
                    value: newValue,
                },
            });
        }
    };

    const handlePlusClick = () => {
        if (+value < max) {
            const newValue = +value + 1;
            setInputValue(`${prefix}${newValue}${suffix}${isSuffixPlural && newValue > 1 ? 's' : ''}`);
            onChange({
                target: {
                    name: name,
                    value: newValue,
                },
            });
        }
    };

    return (
        <div className={['input-number mb-3', outerClassName].join(' ')}>
            <div className='input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text minus' onClick={handleMinusClick}>
                        -
                    </span>
                </div>
                <input
                    min={min}
                    max={max}
                    name={name}
                    pattern='[0-9]*'
                    className='form-control'
                    placeholder={placeholder ? placeholder : '0'}
                    value={String(InputValue)}
                    onChange={handleChange}
                    readOnly={readOnly}
                />
                <div className='input-group-append'>
                    <span className='input-group-text plus' onClick={handlePlusClick}>
                        +
                    </span>
                </div>
            </div>
        </div>
    );
}

Number.defaultProps = {
    min: 1,
    max: 1,
    prefix: '',
    suffix: '',
    isSuffixPlural: false,
    readOnly: false,
};

Number.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    outerClassName: PropTypes.string,
    name: PropTypes.string,
    isSuffixPlural: PropTypes.bool,
    readOnly: PropTypes.bool,
};
