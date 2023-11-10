import {Component} from "preact";

class MyThingy extends Component {
    state = {
        error: null,
        isLoaded: false,
        data: {}
    };

    componentDidMount() {
        console.log('Hello from a new <MyThingy> component!')
        fetch("/test.json")
            .then(res => res.text())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    componentDidUpdate() {
        console.log('A <MyThingy> component was updated!')
    }
    render() {
        const { error, isLoaded, data } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        return (<div>{data}</div>);
    }
}

export function Sandbox() {
    return (<MyThingy />);
}
