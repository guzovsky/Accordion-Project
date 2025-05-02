// Select all question elements
const questions = document.querySelectorAll('.question');

// Loop through each question and add click event listeners
questions.forEach(q => {
  q.addEventListener('click', () => {
    // Close all other questions by removing the 'active' class
    questions.forEach(item => {
      if (item !== q) {
        item.classList.remove('active');
      }
    });

    // Toggle the 'active' class for the clicked question
    q.classList.toggle('active');
  });
});
