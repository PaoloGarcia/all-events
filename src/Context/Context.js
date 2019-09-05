import React from "react";

const Context = React.createContext();

class Provider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div></div>
        );
    }
}

export const Consumer = Context.Consumer;

export default Provider;