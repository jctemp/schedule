const cols = Array.from(document.querySelectorAll("col"));
const today = new Date().getDay();
if (cols.length > 0 && 0 < today && today < 6) {
    cols[today].style.background = "var(--color-highlight)";
}