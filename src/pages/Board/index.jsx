import { Goban } from '@sabaki/shudan';
import '@sabaki/shudan/css/goban.css';

export function Board(props) {
	return (
		<Goban vertexSize={48} signMap={[
			[ 0,  0,  1,  0, -1, -1,  1,  0, 0],
			[ 1,  0,  1, -1, -1,  1,  1,  1, 0],
			[ 0,  0,  1, -1,  0,  1, -1, -1, 0],
			[ 1,  1,  1, -1, -1, -1,  1, -1, 0],
			[ 1, -1,  1,  1, -1,  1,  1,  1, 0],
			[-1, -1, -1, -1, -1,  1,  0,  0, 0],
			[ 0, -1, -1,  0, -1,  1,  1,  1, 1],
			[ 0,  0,  0,  0,  0, -1, -1, -1, 1],
			[ 0,  0,  0,  0,  0,  0,  0, -1, 0]
		]} />
	);
}