import {Component} from "preact";
import sgf from "@sabaki/sgf";
import GameTree from '@sabaki/immutable-gametree';

class MyThingy extends Component {
    state = {
        error: null,
        isLoaded: false,
        data: {}
    };

    componentDidMount() {
        console.log('Hello from a new <MyThingy> component!')
        fetch("/33.sgf")
            .then(res => res.text())
            .then(
                (content) => {
                    let getId = (id => () => id++)(0)
                    let rootNodes = sgf.parse(content, {getId})
                    this.setState({
                        isLoaded: true,
                        data: new GameTree({getId, root: rootNodes[0]})
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
        const s = data.getSequence(0);
        let p = "";
        for (let x of s) {
            // p = p + " " + Object.keys(x.data);
            p = p + x.data.C
        }
        s.next()
        return (<div>{p}</div>);
    }
}

export function Sandbox() {
    return (<MyThingy />);
}
