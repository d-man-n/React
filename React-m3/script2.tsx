//5
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


// import * as React from 'react';
// const Component = (props: { color: string }) => <div {...props} />;
// type Props = React.ElementConfig<typeof Component>;

//6




