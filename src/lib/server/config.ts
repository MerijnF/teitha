import { env } from '$env/dynamic/private';

export const dataDir = env.DATADIR.replace(/[\/\\]$/, '');
