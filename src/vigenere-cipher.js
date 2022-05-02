const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (dir = true) {
		this.dir = dir;
	}
  encrypt(message, key, decrypt = false) {
    //throw new NotImplementedError('Not implemented');
    if (!message || !key) {
			throw new Error('Incorrect arguments!');
		}

		const res = [];
		let index = 0;
		[message, key] = [message, key].map(el => el.toUpperCase());

		for (let ch of message) {
			const num = ch.charCodeAt(0);

			if (num >= 65 && num <= 90) {
				const numCode = (key[index++ % key.length].charCodeAt(0) - 65) % 32;
        const charCode = decrypt ? num + 65 - numCode : num - 65 + numCode;

				ch = String.fromCharCode(charCode % 26 + 65);
			}
			res.push(ch);

		}
		return (this.dir ? res : res.reverse()).join("");
  }
  
  decrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    return this.encrypt(message, key, true);
  }
}

module.exports = {
  VigenereCipheringMachine
};
