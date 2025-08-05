const path = require('path');

function kebabToPascal(kebab) {
	return kebab
		.split('-')
		.map((w) => `${w[0].toUpperCase()}${w.slice(1)}`)
		.join('');
}

function indexTemplate(files) {
	const data = files.reduce((n, f) => {
		const iconName = path.basename(f, path.extname(f));
		const componentName = kebabToPascal(iconName);
		const importStatement = `import ${componentName} from './${iconName}'`;
		return [
			...n,
			{
				componentName,
				iconName,
				importStatement
			}
		];
	}, []);

	const index = `
import { FunctionComponent, SVGProps } from 'react'

${data.map((d) => d.importStatement).join('\n')}

export const iconNames = [
${data.map((d) => `'${d.iconName}'`).join(',\n')}
] as const

export type IconName = typeof iconNames[number]

export const iconMap: Record<IconName, FunctionComponent<SVGProps<any>>> = {
${data.map((d) => `'${d.iconName}': ${d.componentName}`).join(',\n')}
}
  `;

	return index;
}

module.exports = indexTemplate;
