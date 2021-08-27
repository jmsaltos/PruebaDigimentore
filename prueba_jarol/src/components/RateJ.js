import React from 'react'
import { Rate } from 'antd';
import { useState } from 'react';


export default function RateJ({idRate}) {  
    const desc = ['terrible', 'malo', 'normal', 'bueno', 'excelente'];
    const [value, setvalue] = useState(3);
    const handleChange = (value) => {
        setvalue(value);
    };
    return (
        <div>
           <span>
                <Rate tooltips={desc} onChange={handleChange} value={value} />
                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
            </span>
        </div>
    )
}
