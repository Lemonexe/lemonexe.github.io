// FROM PURE
(function (window, document) {

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink'),
        content  = document.getElementById('main');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    function toggleAll(e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    }

    menuLink.onclick = function (e) {
        toggleAll(e);
    };

    content.onclick = function(e) {
        if (menu.className.indexOf('active') !== -1) {
            toggleAll(e);
        }
    };

}(this, this.document));

// MY FUNCTIONS
let lang; // global state variable for current language

const defaultLang = window.navigator.language.slice(0, 2) === 'cs' ? 'czech' : 'english';
const KEY = 'jira.zby.cz-language';
const persistedLang = localStorage.getItem(KEY);
const isPersistedLang = ['czech', 'english'].includes(persistedLang);
setLang(isPersistedLang ? persistedLang : defaultLang);

function setLang(newLang) {
    console.log('setLang')
    console.log(newLang)
    lang = newLang;
    localStorage.setItem(KEY, newLang);

    const id = 'lang-class-style';
    let el = document.getElementById(id);
    if(!el) {
        el = document.createElement('style');
        el.id = id;
        document.head.appendChild(el);
    }
    const czechDisplay   = lang === 'czech'   ? 'block' : 'none';
    const englishDisplay = lang === 'english' ? 'block' : 'none';
    el.textContent = `
        .czech   { display: ${czechDisplay}; }
        .english { display: ${englishDisplay}; }
    `;
    (lang === 'czech' && typeof czechHeader !== 'undefined') && (document.title = `jira.zby.cz – ${czechHeader}`);
    (lang === 'english' && typeof englishHeader !== 'undefined') && (document.title = `jira.zby.cz – ${englishHeader}`);
}
