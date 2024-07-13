import React from "react";

export default function CustomEvent(props) {
    const ref = React.useRef();
  
    const { onSize } = props;
  
    React.useEffect(() => {
        const width = ref.current.offsetWidth;
        const height = ref.current.offsetHeight;
        if (onSize) {
            onSize({ width, height });
        }
    });
  
    return <li ref={ref} className={'event' + (props.slim ? ' event_slim' : '')}>
        <button className="event__button">
            <span className={`event__icon event__icon_${props.icon}`} role="img" aria-label={props.iconLabel}></span>
            <h4 className="event__title">{props.title}</h4>
            {props.subtitle &&
                <span className="event__subtitle">{props.subtitle}</span>
            }
        </button>
    </li>;
  }