type Player = "X" | "O"

document.querySelectorAll(".tic_tac_toe_square").forEach(e => {
    e.addEventListener("click", function() {
        const pos = e.children[0].id
        game(pos)
    })
})

document.querySelector('#reset')?.addEventListener("click", function() {
    reset()
})

let turn: Player = "X"
function game(position: string) {
    place(turn, position) 
    turn = switchTurn(turn)
    checkWinner()
}

function switchTurn(player: Player) {
    let out: Player;
    if (player == "O") {
        out = "X"
    } else {
        out = "O"
    }
    return out
}

function checkWinner() {
    const x = './public/x-icon.svg';
    const o = './public/o-icon.svg';

    const square1 = document.querySelector("#pos-1")?.getAttribute('src')
    const square2 = document.querySelector("#pos-2")?.getAttribute('src')
    const square3 =  document.querySelector("#pos-3")?.getAttribute('src')
    const square4 =  document.querySelector("#pos-4")?.getAttribute('src')
    const square5 =  document.querySelector("#pos-5")?.getAttribute('src')
    const square6 =  document.querySelector("#pos-6")?.getAttribute('src')
    const square7 =  document.querySelector("#pos-7")?.getAttribute('src')
    const square8 =  document.querySelector("#pos-8")?.getAttribute('src')
    const square9 =  document.querySelector("#pos-9")?.getAttribute('src')

    if ((square1 == x && square2 == x && square3 == x) || (square4 == x && square5 == x && square6 == x) || (square7 == x && square8 == x && square9 == x) || (square1 == x && square4 == x && square7 == x) || (square2 == x && square5 == x && square8 == x) || (square3 == x && square6 == x && square9 == x) || ((square3 == x || square1 == x || square7 == x || square9 == x) && (square5 == x && square9 == x))) {
        reset()
        addScore("X")
    }
    if ((square1 == o && square2 == o && square3 == o) || (square4 == o && square5 == o && square6 == o) || (square7 == o && square8 == o && square9 == o) || (square1 == o && square4 == o && square7 == o) || (square2 == o && square5 == o && square8 == o) || (square3 == o && square6 == o && square9 == o) || ((square3 == o || square1 == o || square7 == o || square9 == o) && (square5 == o && square9 == o))) {
        reset()
        addScore("O")
    } else if (square1 && square2 && square3 && square4 && square5 && square6 && square7 && square8 && square9) {
        reset()
    }

}

function addScore(player: Player) {
    let scoreStr = document.querySelector(`#player_${player.toLowerCase()}_score`)?.textContent;
    if (!scoreStr) {
        return
    }
    const score = Number.parseInt(scoreStr) + 1
    document.querySelector(`#player_${player.toLowerCase()}_score`)!.innerHTML = String(score)
}

function reset() { 
    document.querySelectorAll(".tic_tac_toe_square").forEach(e => {
        e.children[0].setAttribute('src', '');
    })
    turn = "X"
    document.querySelector("#next__turn")!.innerHTML = "X"
}

function place(player: Player, position: string) {
    if (!position) {
        return
    }

    const img: HTMLElement | null = document.querySelector<HTMLElement>(`#${position}`);
    if (!img) {
        return
    }
    if (img.getAttribute('src')) {
        return
    }

    let icon = "./public/"
    if (player == "O") {
        icon += "o-icon.svg"
    } else {
        icon += "x-icon.svg"
    }

    img.setAttribute('src', icon)
    let next: string = player == "X" ? "O" : "X";
    document.querySelector("#next__turn")!.innerHTML = next
}