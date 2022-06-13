const Keyboard = {
	elements: {
		container: null,
		textarea: null,
		keyboard: null,
		keyboardPlate: null,
		keys: {
			Backquote: {
				eng: '`',
				rus: 'ё'
			},
			Digit1: {
				eng: '1',
				rus: '1'
			},
			Digit2: {
				eng: '2',
				rus: '2'
			},
			Digit3: {
				eng: '3',
				rus: '3'
			},
			Digit4: {
				eng: '4',
				rus: '4'
			},
			Digit5: {
				eng: '5',
				rus: '5'
			},
			Digit6: {
				eng: '6',
				rus: '6'
			},
			Digit7: {
				eng: '7',
				rus: '7'
			},
			Digit8: {
				eng: '8',
				rus: '8'
			},
			Digit9: {
				eng: '9',
				rus: '9'
			},
			Digit0: {
				eng: '0',
				rus: '0'
			},
			Minus: {
				eng: '-',
				rus: '-'
			},
			Equal: {
				eng: '=',
				rus: '='
			},
			Backspace: {
				eng: 'Backspace',
				rus: 'Backspace'
			},
			Tab: {
				eng: 'Tab',
				rus: 'Tab'
			},
			KeyQ: {
				eng: 'q',
				rus: 'й'
			},
			KeyW: {
				eng: 'w',
				rus: 'ц'
			},
			KeyE: {
				eng: 'e',
				rus: 'у'
			},
			KeyR: {
				eng: 'r',
				rus: 'к'
			},
			KeyT: {
				eng: 't',
				rus: 'е'
			},
			KeyY: {
				eng: 'y',
				rus: 'н'
			},
			KeyU: {
				eng: 'u',
				rus: 'г'
			},
			KeyI: {
				eng: 'i',
				rus: 'ш'
			},
			KeyO: {
				eng: 'o',
				rus: 'щ'
			},
			KeyP: {
				eng: 'p',
				rus: 'з'
			},
			BracketLeft: {
				eng: '[',
				rus: 'х'
			},
			BracketRight: {
				eng: ']',
				rus: 'ъ'
			},
			Backslash: {
				eng: '\\',
				rus: '\\'
			},
			Delete: {
				eng: 'Delete',
				rus: 'Delete',
				key: 'Del'
			},
			CapsLock: {
				eng: 'CapsLock',
				rus: 'CapsLock'
			},
			KeyA: {
				eng: 'a',
				rus: 'ф'
			},
			KeyS: {
				eng: 's',
				rus: 'ы'
			},
			KeyD: {
				eng: 'd',
				rus: 'в'
			},
			KeyF: {
				eng: 'f',
				rus: 'а'
			},
			KeyG: {
				eng: 'g',
				rus: 'п'
			},
			KeyH: {
				eng: 'h',
				rus: 'р'
			},
			KeyJ: {
				eng: 'j',
				rus: 'о'
			},
			KeyK: {
				eng: 'k',
				rus: 'л'
			},
			KeyL: {
				eng: 'l',
				rus: 'д'
			},
			Semicolon: {
				eng: ';',
				rus: 'ж'
			},
			Quote: {
				eng: "'",
				rus: 'э'
			},
			Enter: {
				eng: 'Enter',
				rus: 'Enter'
			},
			ShiftLeft: {
				eng: 'Shift',
				rus: 'Shift'
			},
			KeyZ: {
				eng: 'z',
				rus: 'я'
			},
			KeyX: {
				eng: 'x',
				rus: 'ч'
			},
			KeyC: {
				eng: 'c',
				rus: 'с'
			},
			KeyV: {
				eng: 'v',
				rus: 'м'
			},
			KeyB: {
				eng: 'b',
				rus: 'и'
			},
			KeyN: {
				eng: 'n',
				rus: 'т'
			},
			KeyM: {
				eng: 'm',
				rus: 'ь'
			},
			Comma: {
				eng: ',',
				rus: 'б'
			},
			Period: {
				eng: '.',
				rus: 'ю'
			},
			Slash: {
				eng: '/',
				rus: '.'
			},
			ShiftRight: {
				eng: 'Shift',
				rus: 'Shift'
			},
			ArrowUp: {
				eng: 'ArrowUp',
				rus: 'ArrowUp',
				key: '▲'
			},
			ControlLeft: {
				eng: 'Control',
				rus: 'Control',
				key: 'Ctrl'
			},
			MetaLeft: {
				eng: 'Meta',
				rus: 'Meta',
				key: '⊞'
			},
			AltLeft: {
				eng: 'Alt',
				rus: 'Alt'
			},
			Space: {
				eng: ' ',
				rus: ' ',
				key: 'Space'
			},
			AltRight: {
				eng: 'Alt',
				rus: 'Alt'
			},
			ControlRight: {
				eng: 'Control',
				rus: 'Control',
				key: 'Ctrl'
			},
			ArrowLeft: {
				eng: 'ArrowLeft',
				rus: 'ArrowLeft',
				key: '◄'
			},
			ArrowDown: {
				eng: 'ArrowDown',
				rus: 'ArrowDown',
				key: '▼'
			},
			ArrowRight: {
				eng: 'ArrowRight',
				rus: 'ArrowRight',
				key: '►'
			}
		}
	},

	properties: {
		language: 'rus',
		capsLock: false
	},

	init() {
		this.elements.container = document.createElement('div');
		this.elements.textarea = document.createElement('textarea');
		this.elements.keyboard = document.createElement('div');
		this.elements.keyboardPlate = document.createElement('div');

		this.elements.container.classList.add('container');
		this.elements.keyboard.classList.add('keyboard');
		this.elements.keyboardPlate.classList.add('keyboard-plate');

		this.elements.textarea.setAttribute('cols', '46');
		this.elements.textarea.setAttribute('rows', '5');
		this.elements.textarea.setAttribute('autofocus', '');

		this.elements.container.appendChild(this.elements.textarea);
		this.elements.container.appendChild(this.elements.keyboard);

		this.elements.keyboard.appendChild(this.elements.keyboardPlate);

		document.body.appendChild(this.elements.container);
	},

	createKeys() {
		const keys = this.elements.keys;

		const keysLayout = [
			[
				keys.Backquote,
				keys.Digit1,
				keys.Digit2,
				keys.Digit3,
				keys.Digit4,
				keys.Digit5,
				keys.Digit6,
				keys.Digit7,
				keys.Digit8,
				keys.Digit9,
				keys.Digit0,
				keys.Minus,
				keys.Equal,
				keys.Backspace
			],
			[
				keys.Tab,
				keys.KeyQ,
				keys.KeyW,
				keys.KeyE,
				keys.KeyR,
				keys.KeyT,
				keys.KeyY,
				keys.KeyU,
				keys.KeyI,
				keys.KeyO,
				keys.KeyP,
				keys.BracketLeft,
				keys.BracketRight,
				keys.Backslash,
				keys.Delete
			],
			[
				keys.CapsLock,
				keys.KeyA,
				keys.KeyS,
				keys.KeyD,
				keys.KeyF,
				keys.KeyG,
				keys.KeyH,
				keys.KeyJ,
				keys.KeyK,
				keys.KeyL,
				keys.Semicolon,
				keys.Quote,
				keys.Enter
			],
			[
				keys.ShiftLeft,
				keys.KeyZ,
				keys.KeyX,
				keys.KeyC,
				keys.KeyV,
				keys.KeyB,
				keys.KeyN,
				keys.KeyM,
				keys.Comma,
				keys.Period,
				keys.Slash,
				keys.ArrowUp,
				keys.ShiftRight
			],
			[
				keys.ControlLeft,
				keys.MetaLeft,
				keys.AltLeft,
				keys.Space,
				keys.AltRight,
				keys.ArrowLeft,
				keys.ArrowDown,
				keys.ArrowRight,
				keys.ControlRight
			]
		];

		keysLayout.forEach((elem) => {
			let row = document.createElement('div');
			row.classList.add('keyboard-row');

			for (let j = 0; j < elem.length; j++) {
				let keyButton = document.createElement('button');
				keyButton.classList.add('keyboard-key', 'pulled');
				keyButton.setAttribute('name', `${elem[j][Keyboard.properties.language]}`);
				row.appendChild(keyButton);
				keyButton.textContent = elem[j].key || elem[j][Keyboard.properties.language];

				switch (elem[j][Keyboard.properties.language]) {
					case 'Backspace':
						keyButton.classList.add('longer');
						break;
					case 'CapsLock':
						keyButton.classList.add('longer');
						keyButton.classList.add('activated');
						break;
					case 'Enter':
						keyButton.classList.add('longer');
						break;
					case 'Shift':
						keyButton.classList.add('longer');
						break;
					case ' ':
						keyButton.classList.add('longest');
						break;
					default:
						break;
				}
			}
			this.elements.keyboardPlate.appendChild(row);
		});
	},

	toggleCapsLock() {},

	toggleLanguage() {
		this.properties.language = this.properties.language === 'rus' ? 'eng' : 'rus';
		this.createKeys();
	},

	handleKeyDown(event) {
		if (this.elements.keys);

		this.elements.textarea.value = `${this.elements.textarea.value}${this.elements.keys[event.code][
			this.properties.language
		]}`;

		let buttons = document.getElementsByTagName('button');

		for (let i = 0; i < buttons.length; i++) {
			if (event.key === buttons[i].name) {
				buttons[i].classList.add('pushed');
				buttons[i].classList.remove('pulled');
			}
		}
	},

	handleKeyUp(event) {
		let buttons = document.getElementsByTagName('button');

		for (let i = 0; i < buttons.length; i++) {
			if (event.key === buttons[i].name) {
				console.log(buttons[i].name);
				buttons[i].classList.remove('pushed');
				buttons[i].classList.add('pulled');
			}
		}
	}
};

window.addEventListener('DOMContentLoaded', function() {
	Keyboard.init();
	Keyboard.createKeys();
});

document.addEventListener('keydown', Keyboard.handleKeyDown.bind(Keyboard));
document.addEventListener('keyup', Keyboard.handleKeyUp);
