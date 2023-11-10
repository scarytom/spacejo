import { Goban } from '@sabaki/shudan';
import Board from '@sabaki/go-board';
import '@sabaki/shudan/css/goban.css';
import { useState } from 'preact/hooks';

export function DemoBoard() {
	const [board, setBoard] = useState(new Board([
		[ 0,  0,  1,  0, -1, -1,  1,  0, 0],
		[ 1,  0,  1, -1, -1,  1,  1,  1, 0],
		[ 0,  0,  1, -1,  0,  1, -1, -1, 0],
		[ 1,  1,  1, -1, -1, -1,  1, -1, 0],
		[ 1, -1,  1,  1, -1,  1,  1,  1, 0],
		[-1, -1, -1, -1, -1,  1,  0,  0, 0],
		[ 0, -1, -1,  0, -1,  1,  1,  1, 1],
		[ 0,  0,  0,  0,  0, -1, -1, -1, 1],
		[ 0,  0,  0,  0,  0,  0,  0, -1, 0]
	]));

	const vertexClicked = (evt, vertex) => {
		try {
			setBoard(board.makeMove(1, vertex, {
				preventOverwrite: true,
				preventSuicide: true,
				preventKo: true
			}));
		} catch (e) {
		}
	};

	return (
		<Goban vertexSize={48}
			   signMap={board.signMap}
			   onVertexClick={vertexClicked} />
	);
}