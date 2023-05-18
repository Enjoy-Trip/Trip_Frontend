function ImportBlackHanSans() {
    const link = document.createElement("link");

    link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@400;700&display=swap");
    link.setAttribute("rel", "stylesheet");

    document.head.appendChild(link);
}

function ImportRighteous() {
    const link = document.createElement("link");

    link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Righteous&display=swap");
    link.setAttribute("rel", "stylesheet");

    document.head.appendChild(link);
}

export default function ImportFonts() {
    ImportBlackHanSans();
    ImportRighteous();
}