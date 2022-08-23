import React from 'react';
import {Styled} from "./styles.js";

const TextArea = ({value, onChange, children}) => {
    return (
        <Styled.Textarea value={value} onChange={(e) => onChange(e.target.value)}>
            {children}
        </Styled.Textarea>
    );
};

export default TextArea;