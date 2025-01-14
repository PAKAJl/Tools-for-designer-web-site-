"use strict"

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
const panels = document.querySelector(".cards");

const photoPanel = panels.querySelector(".cards__content--photos");
const sitePanel = panels.querySelector(".cards__content--sites");
const iconPanel = panels.querySelector(".cards__content--s-icons");
const illustPanel = panels.querySelector(".cards__content--illust");

const photoButton = document.querySelector(".cards__button--photo");
const siteButton = document.querySelector(".cards__button--sites");
const iconsButton = document.querySelector(".cards__button--icons");
const illustButton = document.querySelector(".cards__button--illust");

const photoHButton = document.querySelector(".head__link--photo");
const siteHButton = document.querySelector(".head__link--sites");
const iconsHButton = document.querySelector(".head__link--icons");
const illustHButton = document.querySelector(".head__link--illust");

const overlay = document.querySelector(".overlay");

const modals = document.querySelectorAll(".JSmodal");
const cardLinks = document.querySelectorAll(".cards__link");

const form = document.querySelector(".order__form");
const formName = document.querySelector(".form__name");
const formEmail = document.querySelector(".form__email");
const formMessage = document.querySelector(".form__input--rich");
const formSubmit = document.querySelector(".form__button");
const alertElement = document.querySelector(".alert");
const alertEmailElement = document.querySelector(".alert_email");

const validateEmail = (email) => {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}


formSubmit.addEventListener('click', () => {
    alert(123);
});

const formValidate = () => {
    if (formName.value === '') {
        formSubmit.setAttribute('type', 'button');
        alertElement.classList.remove("hidden");
    } else {
        if (formEmail.value === '') {
            formSubmit.setAttribute('type', 'button');
            alertElement.classList.remove("hidden");
        } else {
            if (validateEmail(formEmail.value)) {
                if (formMessage.value !== '') {
                    formSubmit.setAttribute('type', 'submit');
                    alertElement.classList.add("hidden");
                } else {
                    formSubmit.setAttribute('type', 'button');
                    alertElement.classList.remove("hidden");
                }
            }
        }

    }
}

formName.addEventListener('keyup', (e) => {
    formValidate();
});

formEmail.addEventListener('keyup', (e) => {
    formValidate();
    if (!validateEmail(formEmail.value)) {
        alertEmailElement.classList.remove("hidden");
    } else {
        alertEmailElement.classList.add("hidden");
    }
});

formMessage.addEventListener('keyup', (e) => {
    formValidate();
});


const clearActiveButtons = () => {
    photoButton.classList.remove("button-active");
    siteButton.classList.remove("button-active");
    iconsButton.classList.remove("button-active");
    illustButton.classList.remove("button-active");
}
const findJSClass = (node) => {
    let result;
    let classList = node.classList.toString().split(' ');
    classList.forEach(element => {
        if (element.includes('JS') & element != "JSmodal") {
            result = element;
        }
    });
    return result;
}

const clearPanels = () => {
    const arr = [photoPanel, sitePanel, iconPanel, illustPanel];
    arr.forEach(element => {
        if (!element.classList.contains("hidden")) {
            element.classList.add("hidden");
        }
    });
}
const switchPanel = (panel) => {
    clearActiveButtons();
    clearPanels();
    if (panel === photoPanel) {
        photoButton.classList.add("button-active");
        photoPanel.classList.remove("hidden");
    }
    if (panel === sitePanel) {
        siteButton.classList.add("button-active");
        sitePanel.classList.remove("hidden");
    }
    if (panel === iconPanel) {
        iconsButton.classList.add("button-active");
        iconPanel.classList.remove("hidden");
    }
    if (panel === illustPanel) {
        illustButton.classList.add("button-active");
        illustPanel.classList.remove("hidden");
    }
}


photoButton.addEventListener('click', (e) => {
    e.preventDefault();
    switchPanel(photoPanel);
});
iconsButton.addEventListener('click', (e) => {
    e.preventDefault();
    switchPanel(iconPanel);
});
siteButton.addEventListener('click', (e) => {
    e.preventDefault();
    switchPanel(sitePanel);
});
illustButton.addEventListener('click', (e) => {
    e.preventDefault();
    switchPanel(illustPanel);
});

photoHButton.addEventListener('click', (e) => {
    switchPanel(photoPanel);
});
iconsHButton.addEventListener('click', (e) => {
    switchPanel(iconPanel);
});
siteHButton.addEventListener('click', (e) => {
    switchPanel(sitePanel);
});
illustHButton.addEventListener('click', (e) => {
    switchPanel(illustPanel);
});



cardLinks.forEach(element => {
    let modalCur;
    const jsClass = findJSClass(element);

    for (let i = 0; i < modals.length; i++) {
        if (jsClass === findJSClass(modals[i])) {
            modalCur = modals[i];
        }
    }
    element.addEventListener('click', (e) => {
        e.preventDefault();
        disableBodyScroll(document);
        modalCur.classList.remove("hidden");
        overlay.classList.remove("hidden");
        let a = () => modalSwitching(e, modalCur);
        overlay.addEventListener('click', a);
    });
});



const modalSwitching = (e, modal) => {
    overlay.classList.add("hidden");
    enableBodyScroll(document);
    modal.classList.add("hidden");
    overlay.removeEventListener('click', modalSwitching);
}



findJSClass(document.querySelector(".JSsocial1"));

clearPanels();
clearActiveButtons();
photoButton.classList.add("button-active");
photoPanel.classList.remove("hidden");