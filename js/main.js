const resetSelect = () => {
    document.querySelectorAll('.nav__link').forEach(link => link.classList.remove('link-active'))
}
const addSelect = (link) => {
    link.classList.add('link-active')
}
const linkAnimation = () => {
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            resetSelect()
            addSelect(link)
        })
    })
}

const workCount = () => {
    document.querySelectorAll('.number').forEach((counter, index) => {
        if (index === 0 || index === 2) {
            let IdInterval = setInterval(() => {
                let progress = parseInt(counter.getAttribute('value-progress'))
                let value = parseInt(counter.getAttribute('value-count'))
                if (progress < value) {
                    progress++
                    counter.setAttribute('value-progress', progress)
                    counter.innerHTML = `${progress}+`
                } else {
                    clearInterval(IdInterval)
                }

            }, 70)
        } else {
            let IdInterval = setInterval(() => {
                let progress = parseInt(counter.getAttribute('value-progress'))
                let value = parseInt(counter.getAttribute('value-count'))
                if (progress < value) {
                    progress++
                    counter.setAttribute('value-progress', progress)
                    counter.innerHTML = `${progress}`
                } else {
                    clearInterval(IdInterval)
                }

            }, 70)
        }
    })
}

window.addEventListener('load', () => {
    linkAnimation()
    workCount()
})
