import React from 'react';
import { Button } from './Button';
import notes from './Button.md';

export default {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		notes: { notes },
		controls: {
      disable: true
    },
    actions: {
      disable: true
    }
	}
}

export const Primary = () => (
	<>
		<Button>Primary</Button>
		<Button outline>Outline</Button>
		<Button gradient>Gradient</Button>
	</>
)

export const Secondary = () => (
	<>
		<Button secondary>Secondary</Button>
		<Button secondary outline>Outline</Button>
		<Button secondary gradient>Gradient</Button>
	</>
)

export const Tertiary = () => (
	<>
		<Button tertiary>Tertiary</Button>
		<Button tertiary outline>Outline</Button>
		<Button tertiary gradient>Gradient</Button>
	</>
)

export const Success = () => (
	<>
		<Button success>Success</Button>
		<Button success outline>Outline</Button>
		<Button success gradient>Gradient</Button>
	</>
)

export const Warning = () => (
	<>
		<Button warning>Warning</Button>
		<Button warning outline>Outline</Button>
		<Button warning gradient>Gradient</Button>
	</>
)

export const Error = () => (
	<>
		<Button error>Error</Button>
		<Button error outline>Outline</Button>
		<Button error gradient>Gradient</Button>
	</>
)

export const Status = () => (
	<>
		<Button status>Status</Button>
		<Button status outline>Outline</Button>
		<Button status gradient>Gradient</Button>
	</>
)