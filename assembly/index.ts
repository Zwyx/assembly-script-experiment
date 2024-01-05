import { BigInt } from "as-bigint/assembly";

const BASE_81 = BigInt.from(81);
const BASE_81_ALPHABET =
	"!#$%&*+,-./0123456789:;=?@ABCDEFGHIJKLMNOPQRSTUVWXYZ^_abcdefghijklmnopqrstuvwxyz~";

export function wasmFromBase81(text: string): string {
	const time = Date.now();

	let result = BigInt.from(0);

	// Successive multiplications method
	for (let i = 0; i < text.length; i++) {
		result = result
			.mul(BASE_81)
			.add(BigInt.from(BASE_81_ALPHABET.indexOf(text.charAt(i))));
	}
	// Very slow method
	// for (let i = text.length - 1; i >= 0; i--) {
	// 	result +=
	// 		BigInt(BASE_81_ALPHABET.indexOf(text.charAt(i))) *
	// 		BASE_81 ** BigInt(text.length - 1 - i);
	// }
	// Not faster method
	// let multiplier = 1n;
	// for (let i = text.length - 1; i >= 0; i--) {
	// 	result += BigInt(BASE_81_ALPHABET.indexOf(text.charAt(i))) * multiplier;
	// 	multiplier *= BASE_81;
	// }

	console.log(`'wasmFromBase81' took ${Date.now() - time}ms`);

	return result.toString();
}
