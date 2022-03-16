const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]')

for (const tab of tabsHandlerElems) {
    tab.addEventListener('click', () => {
        tabsHandlerElems.forEach(item => {
            if (tab === item) {
                item.classList.add('design-list__item_active');
            }
        })

        tabsFieldElems.forEach(item => {
            if (item.dataset.tabsField === tab.document.tabsHandler) {
                item,classList.remove('hadden')
            } else {
                item.classList,add('hidden')
            }
        })
    })
}
