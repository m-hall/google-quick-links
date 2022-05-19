
const u = location.pathname.match(/\d+/)[0];
const imageSize = 44; // default 64;
const elements = [
    {},
    {
        name: 'Calendar',
        backgroundPosition: -2553,
        getHref: (u) => `https://calendar.google.com/calendar/u/${u}/`
    },
    {
        name: 'Photos',
        backgroundPosition: -2829,
        getHref: (u) => `https://photos.google.com/?authuser=${u}`
    },
    {
        name: 'Maps',
        backgroundPosition: -483,
        getHref: (u) => `https://maps.google.ca/maps?authuser=${u}`
    },
    {},
    {
        name: 'Drive',
        backgroundPosition: -2967,
        getHref: (u) => `https://drive.google.com/drive/u/${u}/my-drive`
    },
    {
        name: 'Docs',
        backgroundPosition: -1242,
        getHref: (u) => `https://docs.google.com/document/u/${u}/`
    },
    {
        name: 'Sheets',
        backgroundPosition: -2208,
        getHref: (u) => `https://docs.google.com/spreadsheets/u/${u}/`
    },
    {
        name: 'Slides',
        backgroundPosition: -2277,
        getHref: (u) => `https://docs.google.com/presentation/u/${u}/`
    }
];

function getAppLogo(position, size) {
    const span = document.createElement('span');
    span.style.display = 'inline-block';
    span.style.backgroundPosition = `0 ${position * size / 64}px`;
    span.style.backgroundImage = 'url(https://ssl.gstatic.com/gb/images/p2_772b9c3b.png)';
    span.style.margin = '0 auto';
    span.style.backgroundSize = `${size}px ${3100 * size / 64}px`;
    span.style.width = `${size}px`;
    span.style.height = `${size}px`;

    return span;
}

function createLink(link, u) {
    const a = document.createElement('a');
    a.target = '_blank';
    a.href = link.getHref(u);
    a.style.display = 'flex';
    a.style.flexDirection = 'column';
    a.style.alignItems = 'center';
    a.style.fontFamily = 'Roboto,RobotoDraft,Helvetica,Arial,sans-serif';
    a.style.fontSize = '.75rem';
    a.style.letterSpacing = '.3px';
    a.style.color = 'white';
    a.style.textDecoration = 'none';
    a.style.marginBottom = '15px';
    
    a.append(
        getAppLogo(link.backgroundPosition, imageSize),
        link.name
    );

    return a;
}

function getSeparator() {
    const div = document.createElement('div');
    div.style.height = '1px';
    div.style.background = 'rgba(255,255,255,.08)';
    div.style.margin = '10px 8px';

    return div;
}

function getElement(e) {
    if (!e.name) {
        return getSeparator();
    }

    return createLink(e, u);
}

const nav = document.querySelector('[role=navigation]');

nav.append(
    ...elements.map(getElement)
);