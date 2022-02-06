// document.querySelector('.ProductSection .preview button').addEventListener('click', function() {
//     if (this.dataset.img = '1') {
//         document.querySelector('.ProductSection .preview img').classList.remove('show')
//         document.querySelector('.ProductSection .preview img[data-img="1"]').classList.add('show')
//     }
// })

const Buttons = document.querySelectorAll('.ProductSection .preview button');
for (let i = 0; i < Buttons.length; i++) {
    Buttons[i].addEventListener('click', function() {

        const Images = document.querySelectorAll('.ProductSection .preview img');
        for (let i = 0; i < Images.length; i++) {

            console.log(this.dataset.img.value);


            if (this.dataset.img === '1') {

                Buttons[i].classList.remove('active')
                this.classList.add('active')

                Images[i].classList.remove('show');
                document.querySelector('.ProductSection .preview img[data-img="1"]').classList.add('show');

            } else if (this.dataset.img === '2') {
                
                Buttons[i].classList.remove('active')
                this.classList.add('active')

                Images[i].classList.remove('show');
                document.querySelector('.ProductSection .preview img[data-img="2"]').classList.add('show');

            }

        }
    })
}