import type { Asset } from '$lib/asset';
import { writeFile, mkdir } from 'fs/promises';
import { dataDir } from './config';

export async function saveAsset(asset: Asset) {
	var path: string;
	if (global) {
		path = `${dataDir}/assets`;
	} else {
		path = `${dataDir}/${asset.campaign}/assets`;
	}
	await mkdir(path, { recursive: true });

	await writeFile(`${path}/${asset.name}`, asset.data);
}
