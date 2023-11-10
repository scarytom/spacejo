import { Goban } from '@sabaki/shudan';
import Board from '@sabaki/go-board';
import '@sabaki/shudan/css/goban.css';

export function DemoBoard() {
	const board = new Board([
		[ 0,  0,  1,  0, -1, -1,  1,  0, 0],
		[ 1,  0,  1, -1, -1,  1,  1,  1, 0],
		[ 0,  0,  1, -1,  0,  1, -1, -1, 0],
		[ 1,  1,  1, -1, -1, -1,  1, -1, 0],
		[ 1, -1,  1,  1, -1,  1,  1,  1, 0],
		[-1, -1, -1, -1, -1,  1,  0,  0, 0],
		[ 0, -1, -1,  0, -1,  1,  1,  1, 1],
		[ 0,  0,  0,  0,  0, -1, -1, -1, 1],
		[ 0,  0,  0,  0,  0,  0,  0, -1, 0]
	]);
	return (
		<Goban vertexSize={48} signMap={board.signMap} />
	);
}