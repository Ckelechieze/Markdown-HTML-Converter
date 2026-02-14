function convertMarkdown() {
  //get the markdown text
  let markdownText = document.getElementById("markdown-input").value
  //convert markdown to HTML using regex
  let HTML = markdownText
  //replace headings
    .replace(/^# (.*$)/igm, "<h1>$1</h1>") 
    .replace(/^## (.*$)/igm, "<h2>$1</h2>")
    .replace(/^### (.*$)/igm, "<h3>$1</h3>")
    //replace bold
    .replace(/\*\*(.*?)\*\*/igm, "<strong>$1</strong>")
    .replace(/__(.*?)__/igm, "<strong>$1</strong>")
    //replace italics
    .replace(/\*(.*?)\*/igm, "<em>$1</em>")
    .replace(/_(.*?)_/igm, "<em>$1</em>")
    //replace img and src
    .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1">')
    //replace linkText and URL
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    //replace blockquotes
    .replace(/^\s*> (.*$)/igm, "<blockquote>$1</blockquote>")

    return HTML;
}

//function to display html
function displayHTML() {
  //get the converted HTML
  let html = convertMarkdown();
  //put it into html-output as raw text
  document.getElementById("html-output").textContent = html;
  //render HTML in preview
  document.getElementById("preview").innerHTML = html;
}
//live update as you type
document.getElementById("markdown-input").addEventListener("input", displayHTML);