document.getElementById('openQuestion').addEventListener('click', openQuestionNumber);
document.getElementById('questionNumber').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        openQuestionNumber();
    }
});
function openQuestionNumber() {
    const questionNumber = document.getElementById('questionNumber').value;
    if (questionNumber) {
        // Load the questions.json file
        fetch('questions.json')
            .then(response => response.json())
            .then(data => {
                const slug = data[questionNumber];
                if (slug) {
                    const url = `https://leetcode.com/problems/${slug}/`;
                    chrome.tabs.create({ url });
                } else {
                    alert('Question number not found.');
                }
            })
            .catch(error => {
                console.error('Error loading questions.json:', error);
                alert('Failed to load question data.');
            });
    } else {
        alert('Please enter a question number.');
    }
}