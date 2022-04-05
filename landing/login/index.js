const toggleClass = (doc1, doc2) => {
  doc1.classList.add("active");
  doc2.classList.remove("active");
};

document.getElementById("admin").addEventListener("click", () => {
  let doc1 = document.getElementById("admin");
  let doc2 = document.getElementById("staff");
  toggleClass(doc1, doc2);
});
document.getElementById("staff").addEventListener("click", () => {
  let doc1 = document.getElementById("staff");
  let doc2 = document.getElementById("admin");
  toggleClass(doc1, doc2);
});
