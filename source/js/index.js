/* post block functionality */

/* switch current range */

const postForm = document.querySelector('.post-block__form');
const rangeButtons = postForm?.querySelectorAll('.post-block__icon-button');
let activeRangeButton = postForm?.querySelector('.post-block__icon-button--current');

function toggleRange(activeButton) {
  const activeRangeBlock = document.querySelector(`#${activeButton.dataset.block}`);
  activeRangeBlock?.classList.toggle('post-block__control--current');
  activeButton?.classList.toggle('post-block__icon-button--current');
}

rangeButtons?.forEach(button => button.addEventListener('click', () => {
  // disable current
  toggleRange(activeRangeButton);

  // enable new
  activeRangeButton = button;
  toggleRange(activeRangeButton);
}));

/* reset form */

const resetButton = postForm?.querySelector('.post-block__cancel-button');
resetButton?.addEventListener('click', () => {
  postForm.reset();
});

// post block accessibility
const postButtons = document.querySelectorAll('.post-block__icon-button');

function deactivatePostButtons() {
  postButtons?.forEach(button => {
    button.setAttribute('role', 'presentation');
    button.setAttribute('aria-hidden', 'true');
    button.setAttribute('tabindex', '-1');
  });
}

function activatePostButtons() {
  postButtons?.forEach(button => {
    button.removeAttribute('role');
    button.removeAttribute('aria-hidden');
    button.removeAttribute('tabindex');
  });
}

if (window.innerWidth >= 660) {
  deactivatePostButtons();
}

window.addEventListener('resize', () => {
  requestAnimationFrame(() => {
    if (window.innerWidth >= 660 ) {
      deactivatePostButtons();
    }

    if (window.innerWidth < 660 ) {
      activatePostButtons();
    }
  });
});
