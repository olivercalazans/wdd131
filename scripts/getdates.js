const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
}

const lastModifiedParagraph = document.getElementById("lastModified");
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = document.lastModified;
}