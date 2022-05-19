
const links = [
    {
        name: 'Calendar',
        backgroundPosition: '0 -2553px',
        getHref: (u) => `https://calendar.google.com/calendar/u/${u}/`
    },
    {
        name: 'Drive',
        backgroundPosition: '0 -2967px',
        getHref: (u) => `https://drive.google.com/drive/u/${u}/my-drive`
    },
    {
        name: 'Docs',
        backgroundPosition: '0 -1242px',
        getHref: (u) => `https://docs.google.com/document/u/${u}/`
    },
    {
        name: 'Sheets',
        backgroundPosition: '0 -2208px',
        getHref: (u) => `https://docs.google.com/spreadsheets/u/${u}/`
    },
    {
        name: 'Slides',
        backgroundPosition: '0 -2277px',
        getHref: (u) => `https://docs.google.com/presentation/u/${u}/`
    }
];

function createLink(link, u) {
    const a = document.createElement('a');
    a.target = '_blank';
    a.href = link.getHref(u);
    a.style.backgroundPosition = link.backgroundPosition;
    a.style.backgroundImage = 'url(https://ssl.gstatic.com/gb/images/p2_772b9c3b.png)';
    a.style.backgroundSize = '64px 3100px';
    a.style.width = '64px';
    a.style.height = '64px';

    return a;
}

const nav = document.querySelector('[role=navigation]');
const u = location.pathname.match(/\d+/)[0];

nav.append(
    ...links.map((link) => createLink(link, u))
);