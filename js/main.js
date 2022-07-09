const searchMenu = () => {
    document.querySelectorAll('.search-type').forEach(type => {
        type.addEventListener('click', () => {
            for (var i = 0; i < document.querySelectorAll('.search-type').length; i++) {
                document.querySelectorAll('.search-type')[i].classList.remove('search-active')
            }
            type.classList.add('search-active')
        })

    })
}

const mobileMenu = () => {
    document.querySelector('.menu-mobile').addEventListener('click', () => {
        document.querySelector('.menu-mobile').classList.toggle('menu-mobile-active')
        document.querySelector('.mobile__menu').classList.toggle('mobile__menu-active')

//        let ID1 = setTimeout(() => {
             //            document.querySelector('.barr2').classList.add('barr2-bt')
             //            let ID2 = setTimeout(() => {
             //                document.querySelector('.barr3').classList.add('barr3-top')
             //                document.querySelector('.barr2').classList.add('barr2-top')
             //                let ID3 = setTimeout(() => {
             //                    document.querySelector('.barr3').classList.add('barr3-rotate')
             //                    document.querySelector('.barr1').classList.add('barr1-rotate')
             //                    clearInterval(ID1)
             //                    clearInterval(ID2)
             //                    clearInterval(ID3)
             //                }, 450)
             //            }, 500)
             //
             //        }, 600)
    })
}

window.addEventListener('load', () => {
    searchMenu()
    mobileMenu()
})
