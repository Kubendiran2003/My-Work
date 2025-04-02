const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const entriesList = document.getElementById('entries');
const totalIncomeEl = document.getElementById('total-income');
const totalExpenseEl = document.getElementById('total-expense');
const netBalanceEl = document.getElementById('net-balance');

let entries = [];

function updateSummary() {
    const income = entries.filter(e => e.type === 'income').reduce((sum, e) => sum + e.amount, 0);
    const expense = entries.filter(e => e.type === 'expense').reduce((sum, e) => sum + e.amount, 0);
    totalIncomeEl.textContent = income;
    totalExpenseEl.textContent = expense;
    netBalanceEl.textContent = income - expense;
}

function renderEntries(filter = 'all') {
    entriesList.innerHTML = '';
    const filteredEntries = filter === 'all' ? entries : entries.filter(e => e.type === filter);
    filteredEntries.forEach((entry, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${entry.description} - $${entry.amount}
            <div class=\"buttons\">
                <button onclick=\"editEntry(${index})\">Edit</button>
                <button onclick=\"deleteEntry(${index})\">Delete</button>
            </div>`;
        entriesList.appendChild(li);
    });
    updateSummary();
}

function addEntry() {
    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const type = document.querySelector('input[name="type"]:checked').value;

    if (!description || isNaN(amount) || amount <= 0) return;

    entries.push({ description, amount, type });
    renderEntries();
    resetForm();
}

function editEntry(index) {
    const entry = entries[index];
    descriptionInput.value = entry.description;
    amountInput.value = entry.amount;
    document.querySelector(`input[value=${entry.type}]`).checked = true;
    deleteEntry(index);
}

function deleteEntry(index) {
    entries.splice(index, 1);
    renderEntries();
}

function resetForm() {
    descriptionInput.value = '';
    amountInput.value = '';
    document.querySelector('input[value="income"]').checked = true;
}

function filterEntries(type) {
    renderEntries(type);
}

renderEntries();