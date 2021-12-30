import React from 'react';
import {Button} from './Button';

export default {
	title: 'Design System/Atoms/Button',
	component: Button
}

export const Primary = () => (
	<>
		<Button>Primary</Button>
		<Button outline>Primary</Button>
	</>
)

export const Secondary = () => (
	<>
		<Button secondary>Secondary</Button>
		<Button secondary outline>Secondary</Button>
	</>
)

export const Success = () => (
	<>
		<Button success>Success</Button>
		<Button success outline>Success</Button>
	</>
)

export const Danger = () => (
	<>
		<Button danger>Danger</Button>
		<Button danger outline>Danger</Button>
	</>
)


export const Warning = () => (
	<>
		<Button warning>Warning</Button>
		<Button warning outline>Warning</Button>
	</>
)

export const Neumorphic = () => (
	<>
		<Button neumorphic>Warning</Button>
	</>
)