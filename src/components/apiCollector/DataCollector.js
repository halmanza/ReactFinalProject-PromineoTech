import React from 'react';
import DataGetter from './DataGetter';

const DataCollector = (props) => {
    const idNumber=Number(props.idNumber)
    return (
        <div>
            <DataGetter personIdNumber={idNumber} />
        </div>
    )
}

export default DataCollector
