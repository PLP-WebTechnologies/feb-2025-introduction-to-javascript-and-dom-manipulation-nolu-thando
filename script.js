document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("main-title");
    const infoText = document.getElementById("info-text");
    const button = document.getElementById("action-btn");
    const article = document.getElementById("dynamic-article");
  
    let elementExists = true;
  
    button.addEventListener("click", () => {
      // Change text content
      title.textContent = "Thank you for clicking on the button";
      infoText.textContent = "Text and styles updated, and an element was toggled!";
  
      // Modify CSS styles
      title.style.color = "teal";
      infoText.style.fontWeight = "bold";
  
      // Add or remove an element
      if (elementExists) {
        article.remove();
      } else {
        const newArticle = document.createElement("article");
        newArticle.id = "dynamic-article";
        newArticle.innerHTML = `
          <h2>This is my Assigment</h2>
          <p>This is a new version of the dynamic article.</p>
        `;
        document.querySelector("main").appendChild(newArticle);
      }
      elementExists = !elementExists;
    });
  });
  