
import React from 'react';
import './Clock.css';
import { formatHourDigits } from './clockFormatter';

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


    return (<div className="hourclock">{formatHourDigits(now.getHours())}:{formatHourDigits(now.getMinutes())}:{formatHourDigits(now.getSeconds())}</div>)

}

export default Clock;