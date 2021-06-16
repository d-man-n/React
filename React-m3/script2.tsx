//5

import * as React from 'react';

function HomeComponent(props: { firstProp: string }) {
    return (
        <div>
            { props.firstProp }
        </div>
    )
}

type myType = typeof HomeComponent;

props: IProps;
interface IProps {
    firstProp: string
}

const t = TMyType<typeof HomeComponent>;




type props = React.ComponentType<typeof HomeComponent>;

//6




