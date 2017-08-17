function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

// Define a function increaseRankBy(n) that increases the ranks in all of the
// .ranked-lists by n. (You might need to make use of parseInt()

function increaseRankBy(n) {
    var ranklist = document.querySelectorAll('.ranked-list')
    for (var i = 0; i < ranklist.length; i++) {
      ranklist[i].innerHTML = parseInt(ranklist[i].innerHTML) + n
    }
}

// Define a function deepestChild() that pulls out the most deeply nested child
// from div#grand-node. (Remember, you can iterate over elements and call
// querySelector() and querySelectorAll() on them. This is challenging to
// implement correctly, but not beyond your ability!)

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children

  while (nextNode) {
    node = nextNode
    nextNode = node.children
  }

  return node
}
