var btn = document.getElementById("menuBut");
btn.onclick = () => {
  document.getElementById("navBg").classList.toggle("bg-light");
  document.getElementById("mList").classList.toggle("mt-4");
};
