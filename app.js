(function () {
  const shuffleButton = document.querySelector(".shuffle");
  const sortButton = document.querySelector(".sort");
  const cell = document.querySelectorAll(".cell");
  const oldList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function render(list) {
    for (let i = 0; i < cell.length; i++) {
      cell[i].innerHTML = list[i];
    }
  }

  function shuffle() {
    //..shuffle logic
    let toSwap;
    let temp;
    for (var i = 8; i > 0; i--) {
      toSwap = Math.floor(Math.random() * (i + 1));
      temp = oldList[i];
      oldList[i] = oldList[toSwap];
      oldList[toSwap] = temp;
    }
    return oldList; // return updatedList
  }

  function sort() {
    //call render()->with oldList
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    render(list);
  }

  shuffleButton.addEventListener("click", function () {
    render(shuffle());
  });

  sortButton.addEventListener("click", function () {
    sort();
  });

  render(oldList);
})();
