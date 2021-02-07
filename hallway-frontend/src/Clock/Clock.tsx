
import React from 'react';
import './Clock.css';

const Clock = () => {

    const [now, refreshNow] = React.useState(new Date());

    React.useEffect(() => {
        const interval = setInterval(
            () => refreshNow(new Date()),
            200
        );

        return () => {
            clearInterval(interval);
        }
    }, []);


    return (<div className="hourclock">{now.getHours()}:{now.getMinutes()}:{now.getSeconds()}</div>)

}

export default Clock;