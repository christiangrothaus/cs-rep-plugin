class CSRepPlugin {
	private static linkId: string = 'csrep-quick-link'

	injectLink() {
		const target = this.getTargetContainerElement()
		const isAlreadyInDom = !!document.getElementById(CSRepPlugin.linkId)
		if (!target || isAlreadyInDom) return

		const link = document.createElement('a')
		link.href = window.location.href.replace('steamcommunity.com', 'csteamcommunity.com')
		const span = document.createElement('span')
		span.textContent = 'CSRep'
		link.appendChild(span)
		link.className = 'btn_profile_action btn_medium'
		link.id = CSRepPlugin.linkId
		target.appendChild(link)
	}

	registerMutationListener() {
		let observer: MutationObserver | null = null

		window.addEventListener('popstate', () => {
			if (observer) {
				observer.disconnect()
				observer = null
			}

			this.injectLink()

			observer = new MutationObserver(() => {
				this.injectLink()
			})

			observer.observe(document.body, { childList: true, subtree: true })
		})
	}

	private getTargetContainerElement() {
		return document.querySelector('.profile_header_actions')
	}
}

export default async function WebkitMain() {
	const plugin = new CSRepPlugin()
	plugin.injectLink()
	plugin.registerMutationListener()
}
