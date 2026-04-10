import { IconsModule, definePlugin } from '@steambrew/client'

const SettingsContent = () => {
	return <></>
}

export default definePlugin(() => {
	return {
		title: 'My Plugin',
		icon: <IconsModule.Settings />,
		content: <SettingsContent />,
	}
})
