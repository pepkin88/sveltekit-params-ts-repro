import { defineParams } from '@sveltejs/kit/params';
import { fruits } from '#lib/fruits.js';

export const params = defineParams({
	fruit: (param) => (fruits.includes(param) ? param : undefined)
});
