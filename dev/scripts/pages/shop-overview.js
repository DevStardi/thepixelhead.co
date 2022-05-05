
const Buttons = document.querySelectorAll('.ProductOverview .preview button');
for (let i = 0; i < Buttons.length; i++) {
    Buttons[i].addEventListener('click', function() {

        const Images = document.querySelectorAll('.ProductOverview .preview img');
        for (let i = 0; i < Images.length; i++) {

            console.log(this.dataset.img.value);


            if (this.dataset.img === '1') {

                Buttons[i].classList.remove('active')
                this.classList.add('active')

                Images[i].classList.remove('show');
                document.querySelector('.ProductOverview .preview img[data-img="1"]').classList.add('show');

            } else if (this.dataset.img === '2') {
                
                Buttons[i].classList.remove('active')
                this.classList.add('active')

                Images[i].classList.remove('show');
                document.querySelector('.ProductOverview .preview img[data-img="2"]').classList.add('show');

            }

        }
    })
}