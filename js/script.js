const navItems = [
  { label: 'Home', shortLabel: 'Home', href: '../index.html' },
  { label: 'Updates', shortLabel: 'Updates', href: '../pages/updates.html' },
  { label: 'Information', shortLabel: 'Info', href: '../pages/info.html' },
  { label: 'Links', shortLabel: 'Links', href: '../pages/links.html' },
];

const navButtonsContainer = document.getElementById('nav-buttons');

if (navButtonsContainer) {
  navItems.forEach((item) => {
    const button = document.createElement('a');
    button.className = 'nav-button';
    button.href = item.href;
    button.textContent = item.label;
    button.title = item.label;

    navButtonsContainer.appendChild(button);
  });

  const updateNavigationLayout = () => {
    const buttons = Array.from(navButtonsContainer.querySelectorAll('.nav-button'));
    if (buttons.length === 0) return;

    const containerWidth = navButtonsContainer.clientWidth;
    const gap = 12;
    const maxWidth = 180;
    const minWidth = 90;
    const totalGap = gap * Math.max(buttons.length - 1, 0);
    const idealWidth = (containerWidth - totalGap) / buttons.length;
    const buttonWidth = Math.min(maxWidth, Math.max(minWidth, idealWidth));

    buttons.forEach((button, index) => {
      button.style.flexBasis = `${buttonWidth}px`;
      button.style.maxWidth = `${maxWidth}px`;

      const label = buttonWidth < 110 ? navItems[index].shortLabel : navItems[index].label;
      button.textContent = label;
    });
  };

  window.addEventListener('resize', updateNavigationLayout);
  updateNavigationLayout();
}
